-- MySQL Script generated by MySQL Workbench
-- Thu 04 Aug 2022 13:10:59 +03
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema google_books
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema google_books
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `google_books` ;
USE `google_books` ;

-- -----------------------------------------------------
-- Table `google_books`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `google_books`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` TEXT NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `google_books`.`api_tokens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `google_books`.`api_tokens` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `token` TEXT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `expires_at` DATETIME NOT NULL,
  INDEX `fk_api_tokens_users_idx` (`user_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_api_tokens_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `google_books`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `google_books`.`bookmarks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `google_books`.`bookmarks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `google_id` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bookmark_users1_idx` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `google_id_UNIQUE` (`google_id` ASC) VISIBLE,
  CONSTRAINT `fk_bookmark_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `google_books`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
