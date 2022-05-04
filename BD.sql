-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 04 mai 2022 à 10:09
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestion_projet`
--

-- --------------------------------------------------------

--
-- Structure de la table `e_besoin`
--

DROP TABLE IF EXISTS `e_besoin`;
CREATE TABLE IF NOT EXISTS `e_besoin` (
  `Id_formation` int(11) NOT NULL,
  `Id_contact` int(11) NOT NULL,
  `date` date NOT NULL,
  KEY `fk_formation` (`Id_formation`),
  KEY `Id_contact` (`Id_contact`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `e_contact`
--

DROP TABLE IF EXISTS `e_contact`;
CREATE TABLE IF NOT EXISTS `e_contact` (
  `Id_contact` int(11) NOT NULL AUTO_INCREMENT,
  `A_nom` varchar(30) NOT NULL,
  `A_prenom` varchar(30) DEFAULT NULL,
  `A_mail` varchar(30) NOT NULL,
  `A_tel` int(11) NOT NULL,
  PRIMARY KEY (`Id_contact`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `e_formation`
--

DROP TABLE IF EXISTS `e_formation`;
CREATE TABLE IF NOT EXISTS `e_formation` (
  `Id_formation` int(30) NOT NULL AUTO_INCREMENT,
  `A_nomF` varchar(30) NOT NULL,
  `A_programme` varchar(30) NOT NULL,
  `A_duree` time NOT NULL,
  `A_lieu` varchar(30) NOT NULL,
  `A_tarif` double NOT NULL,
  `A_niveauE` varchar(30) NOT NULL,
  `A_niveauS` varchar(30) NOT NULL,
  PRIMARY KEY (`Id_formation`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `e_utilisateur`
--

DROP TABLE IF EXISTS `e_utilisateur`;
CREATE TABLE IF NOT EXISTS `e_utilisateur` (
  `Id_utilisateur` int(20) NOT NULL AUTO_INCREMENT,
  `A_login` varchar(30) NOT NULL,
  `A_mdp` int(30) NOT NULL,
  PRIMARY KEY (`Id_utilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
