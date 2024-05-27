// Toutes les dépendances
import express, { Router } from 'express';
import mysql from 'mysql';
import cors from 'cors'
// import Message from '../react/src/Component/Dashboard/Header/Message';
// import Message from '../react/src/Component/Dashboard/Header/Message';
// import dbCon from './utils/db.js';
// import dotenv from 'dotenv';
// dotenv.config()
// const express = require('express')

// const cors = require('cors');

// Connexion au serveur
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.listen(8097, () => {
    console.log( `Le serveur est connectée` );
});

// Connexion à la base de données

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ihm'
});

// Création d'une route pour l'enregistrement
app.post('/registre', (req, res) => {
    // Récupération des valeurs envoyées depuis le formulaire
    const sentEmail = req.body.Email;
    const sentUserName = req.body.UserName;
    const sentPassword = req.body.Password;
    // Création de la requête SQL pour insérer les utilisateurs dans la base de données
    const SQL = 'INSERT INTO admn (email, password, usernam) VALUES (?, ?, ?)';
    // Insertion des valeurs dans la requête SQL
    const values = [sentEmail, sentPassword, sentUserName];
    // Exécution de la requête SQL
    db.query(SQL, values, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            console.log("Insertion réussie");
            res.send({ message: 'Insertion réussie' });
        }
    });
});

app.post('/login', (req, res)=>{
    // Récupération des valeurs envoyées depuis le formulaire
    const sentLoginUserName = req.body.LoginUserName;
    const sentLoginPassword = req.body.LoginPassword;
    // Création de la requête SQL pour insérer les utilisateurs dans la base de données
    const SQL = 'SELECT * FROM admn WHERE usernam = ? AND password = ?';
    // Insertion des valeurs dans la requête SQL
    const values = [sentLoginUserName, sentLoginPassword];
    // Exécution de la requête SQL
    db.query(SQL, values, (err, results) => {
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            res.send({message: 'Credentials no match'})
        }
    });
});

app.get('/enseignant', (req, res) => {
    const sql = "SELECT * FROM enseignant";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des données:", err);
            return res.status(500).json({ Status: false, Error: "Erreur interne du serveur" });
        }
        console.log("Données récupérées depuis la base de données:", result);
        return res.json({ Status: true, Result: result });
    });
});


app.post('/Enseignant', (req, res) =>{
    const sql = "INSERT INTO enseignant (`nom`, `prenom`, `email`, `password`, `specialisation`) VALUES(?,?,?,?,?)"
    const value = [
        req.body.nom,
        req.body.prenom,
        req.body.email,
        req.body.password,
        req.body.specialisation

    ]

    db.query(sql, value, (err, result) => {
        if(err) return res.json(err)
        return res.json(result);
    })
})

app.put('/Updat_Ense/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const { nom, prenom, email, password, specialisation } = req.body;

    const sql = "UPDATE enseignant SET nom=?, prenom=?, email=?, password=?, specialisation=? WHERE id=?";
    const values = [nom, prenom, email, password, specialisation, id];
    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Enseignant mis à jour avec succès" });
    });

});


// Backend: app.js (Express.js)
app.delete('/enseignant/:id', (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM enseignant WHERE id=?";
    const values = [id];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Enseignant supprimé avec succès" });
    });
});



app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM enseignant WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des données:", err);
            return res.status(500).json({ message: "Erreur interne du serveur" });
        }
        console.log("Données récupérées depuis la base de données:", result);
        return res.json(result);
    });
});


// table etudiant

app.get('/etudiant', (req, res) => {
    const sql = "SELECT * FROM etudiant";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des données:", err);
            return res.status(500).json({ Status: false, Error: "Erreur interne du serveur" });
        }
        console.log("Données récupérées depuis la base de données:", result);
        return res.json({ Status: true, Result: result });
    });
})

app.post('/ajout_etudiant', (req, res) =>{
    const sql = "INSERT INTO etudiant (`nom`, `prenom`, `date_naissance`, `email`, `adress`) VALUES(?,?,?,?,?)"
    const value = [
        req.body.nom,
        req.body.prenom,
        req.body.date_naissance,
        req.body.email,
        req.body.adress

    ]

    db.query(sql, value, (err, result) => {
        if(err) return res.json(err)
        return res.json(result);
    })
})

app.put('/Edit_etudiant/:id_etudant', (req, res) => {
    const id_etudant = req.params.id_etudant;
    const { nom, prenom, date_naissance, email, adress } = req.body;

    const sql = "UPDATE etudiant SET nom=?, prenom=?, date_naissance=?, email=?, adress=? WHERE id_etudant=?";
    const values = [nom, prenom, date_naissance, email, adress, id_etudant];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Etudiant mis à jour avec succès" });
    });
});

app.delete('/Delete_etudiant/:id_etudant', (req, res) => {
    const id_etudant = req.params.id_etudant;

    const sql = "DELETE FROM etudiant WHERE id_etudant =?";
    const values = [id_etudant];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Etudiantant supprimé avec succès" });
    });
});

// table cours
app.post('/Add_cours', (req, res) => {
    const { nom_cours, code, descrition, credit } = req.body;
    const sql = "INSERT INTO cours (nom_cours, code, descrition, credit) VALUES (?, ?, ?, ?)";
    const values = [nom_cours, code, descrition, credit];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Cours créé avec succès", id: result.insertId });
    });
});

app.get('/cours', (req, res) => {
    const sql = "SELECT * FROM cours";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des données:", err);
            return res.status(500).json({ Status: false, Error: "Erreur interne du serveur" });
        }
        console.log("Données récupérées depuis la base de données:", result);
        return res.json({ Status: true, Result: result });
    });
})

app.put('/Edit_cours/:id', (req, res) => {
    const id = req.params.id;
    const { nom_cours, code, descrition, credit } = req.body;
    const sql = "UPDATE cours SET nom_cours=?, code=?, descrition=?, credit=? WHERE id_cours=?";
    const values = [nom_cours, code, descrition, credit, id];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Cours mis à jour avec succès" });
    });
});

app.delete('/Delete_cours/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM cours WHERE id_cours=?";

    db.query(sql, id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Cours supprimé avec succès" });
    });
});

// back-end de table note
app.post('/Ajout_note', (req, res) => {
    const { note, id_etudiant_nom, id_cours_nom } = req.body;
    const sql = "INSERT INTO note (note, id_etudiant_nom, id_cours_nom) VALUES (?, ?, ?)";
    const values = [note, id_etudiant_nom, id_cours_nom];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Note créée avec succès", id: result.insertId });
    });
});

app.get('/Note', (req, res) => {
    const sql = "SELECT * FROM note";  // Assurez-vous que le nom de la table est correct

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ Status: false, Error: err.message });
        }
        return res.status(200).json({ Status: true, Result: result });
    });
});


app.put('/Update_note/:id', (req, res) => {
    const id = req.params.id;
    const { note, id_etudiant_nom, id_cours_nom } = req.body;
    const sql = "UPDATE note SET note=?, id_etudiant_nom=?, id_cours_nom=? WHERE id=?";
    const values = [note, id_etudiant_nom, id_cours_nom, id];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Note mise à jour avec succès" });
    });
});

app.delete('/Delete_note/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM note WHERE id=?";

    db.query(sql, id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Note supprimée avec succès" });
    });
});
