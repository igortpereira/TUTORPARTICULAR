-- MySQL Workbench Synchronization
-- Generated: 2023-10-01 10:24
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Aluno

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `tutorParticular` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`aluno` (
  `idAluno` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(15) NOT NULL,
  `uf` CHAR(2) NULL DEFAULT NULL,
  `cep` VARCHAR(9) NULL DEFAULT NULL,
  `cidade` VARCHAR(100) NULL DEFAULT NULL,
  `bairro` VARCHAR(100) NULL DEFAULT NULL,
  `rua` VARCHAR(100) NULL DEFAULT NULL,
  `numero` INT(11) NULL DEFAULT NULL,
  `foto` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idAluno`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`professor` (
  `idProfessor` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(15) NOT NULL,
  `uf` CHAR(2) NULL DEFAULT NULL,
  `cep` VARCHAR(9) NULL DEFAULT NULL,
  `cidade` VARCHAR(100) NULL DEFAULT NULL,
  `bairro` VARCHAR(100) NULL DEFAULT NULL,
  `rua` VARCHAR(100) NULL DEFAULT NULL,
  `numero` INT(11) NULL DEFAULT NULL,
  `numMaxAlunos` INT(11) NULL DEFAULT NULL,
  `apresentacao` VARCHAR(500) NULL DEFAULT NULL,
  `mediaAvaliacao` DOUBLE NOT NULL,
  `foto` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idProfessor`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`disciplina` (
  `idDisciplina` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `descricao` VARCHAR(1000) NOT NULL,
  `idAdministrador` INT(11) NOT NULL,
  PRIMARY KEY (`idDisciplina`),
  INDEX `fk_disciplina_administrador1_idx` (`idAdministrador` ASC),
  CONSTRAINT `fk_disciplina_administrador1`
    FOREIGN KEY (`idAdministrador`)
    REFERENCES `tutorParticular`.`administrador` (`idAdministrador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`professorDisciplina` (
  `idProfessor` INT(11) NOT NULL,
  `idDisciplina` INT(11) NOT NULL,
  PRIMARY KEY (`idProfessor`, `idDisciplina`),
  INDEX `fk_professor_has_disciplina_disciplina1_idx` (`idDisciplina` ASC),
  INDEX `fk_professor_has_disciplina_professor1_idx` (`idProfessor` ASC),
  CONSTRAINT `fk_professor_has_disciplina_professor1`
    FOREIGN KEY (`idProfessor`)
    REFERENCES `tutorParticular`.`professor` (`idProfessor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_professor_has_disciplina_disciplina1`
    FOREIGN KEY (`idDisciplina`)
    REFERENCES `tutorParticular`.`disciplina` (`idDisciplina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`formatoAula` (
  `idFormatoAula` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `descricao` VARCHAR(1000) NOT NULL,
  `idAdministrador` INT(11) NOT NULL,
  PRIMARY KEY (`idFormatoAula`),
  INDEX `fk_formatoAula_administrador1_idx` (`idAdministrador` ASC),
  CONSTRAINT `fk_formatoAula_administrador1`
    FOREIGN KEY (`idAdministrador`)
    REFERENCES `tutorParticular`.`administrador` (`idAdministrador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`professorFormatoAula` (
  `idProfessor` INT(11) NOT NULL,
  `idFormatoAula` INT(11) NOT NULL,
  `valor` DOUBLE NOT NULL,
  PRIMARY KEY (`idProfessor`, `idFormatoAula`),
  INDEX `fk_professor_has_formatoAula_formatoAula1_idx` (`idFormatoAula` ASC),
  INDEX `fk_professor_has_formatoAula_professor1_idx` (`idProfessor` ASC),
  CONSTRAINT `fk_professor_has_formatoAula_professor1`
    FOREIGN KEY (`idProfessor`)
    REFERENCES `tutorParticular`.`professor` (`idProfessor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_professor_has_formatoAula_formatoAula1`
    FOREIGN KEY (`idFormatoAula`)
    REFERENCES `tutorParticular`.`formatoAula` (`idFormatoAula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`nivelEnsino` (
  `idNivelEnsino` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `descricao` VARCHAR(1000) NOT NULL,
  `idAdministrador` INT(11) NOT NULL,
  PRIMARY KEY (`idNivelEnsino`),
  INDEX `fk_nivelEnsino_administrador1_idx` (`idAdministrador` ASC),
  CONSTRAINT `fk_nivelEnsino_administrador1`
    FOREIGN KEY (`idAdministrador`)
    REFERENCES `tutorParticular`.`administrador` (`idAdministrador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`professorNivelEnsino` (
  `idNivelEnsino` INT(11) NOT NULL,
  `idProfessor` INT(11) NOT NULL,
  PRIMARY KEY (`idNivelEnsino`, `idProfessor`),
  INDEX `fk_nivelEnsino_has_professor_professor1_idx` (`idProfessor` ASC),
  INDEX `fk_nivelEnsino_has_professor_nivelEnsino1_idx` (`idNivelEnsino` ASC),
  CONSTRAINT `fk_nivelEnsino_has_professor_nivelEnsino1`
    FOREIGN KEY (`idNivelEnsino`)
    REFERENCES `tutorParticular`.`nivelEnsino` (`idNivelEnsino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_nivelEnsino_has_professor_professor1`
    FOREIGN KEY (`idProfessor`)
    REFERENCES `tutorParticular`.`professor` (`idProfessor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`mensagem` (
  `idMensagem` INT(11) NOT NULL AUTO_INCREMENT,
  `idAluno` INT(11) NOT NULL,
  `idProfessor` INT(11) NOT NULL,
  `conteudo` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`idMensagem`),
  INDEX `fk_mensagem_aluno1_idx` (`idAluno` ASC),
  INDEX `fk_mensagem_professor1_idx` (`idProfessor` ASC),
  CONSTRAINT `fk_mensagem_aluno1`
    FOREIGN KEY (`idAluno`)
    REFERENCES `tutorParticular`.`aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mensagem_professor1`
    FOREIGN KEY (`idProfessor`)
    REFERENCES `tutorParticular`.`professor` (`idProfessor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`solicitacaoAula` (
  `idSolicitacao` INT(11) NOT NULL AUTO_INCREMENT,
  `idAluno` INT(11) NOT NULL,
  `idProfessor` INT(11) NOT NULL,
  `data` DATE NOT NULL,
  `horaInicio` VARCHAR(5) NOT NULL,
  `horaFim` VARCHAR(45) NOT NULL,
  `quantidadeAluno` INT(11) NOT NULL,
  `formatoAula` VARCHAR(100) NOT NULL,
  `situacao` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idSolicitacao`),
  INDEX `fk_solicitacaoAula_aluno1_idx` (`idAluno` ASC),
  INDEX `fk_solicitacaoAula_professor1_idx` (`idProfessor` ASC),
  CONSTRAINT `fk_solicitacaoAula_aluno1`
    FOREIGN KEY (`idAluno`)
    REFERENCES `tutorParticular`.`aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_solicitacaoAula_professor1`
    FOREIGN KEY (`idProfessor`)
    REFERENCES `tutorParticular`.`professor` (`idProfessor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`avaliacao` (
  `idAvaliacao` INT(11) NOT NULL AUTO_INCREMENT,
  `idAluno` INT(11) NOT NULL,
  `idProfessor` INT(11) NOT NULL,
  `data` DATE NOT NULL,
  `nota` INT(11) NOT NULL,
  `comentario` VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (`idAvaliacao`),
  INDEX `fk_avaliacao_aluno1_idx` (`idAluno` ASC),
  INDEX `fk_avaliacao_professor1_idx` (`idProfessor` ASC),
  CONSTRAINT `fk_avaliacao_aluno1`
    FOREIGN KEY (`idAluno`)
    REFERENCES `tutorParticular`.`aluno` (`idAluno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_avaliacao_professor1`
    FOREIGN KEY (`idProfessor`)
    REFERENCES `tutorParticular`.`professor` (`idProfessor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `tutorParticular`.`administrador` (
  `idAdministrador` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAdministrador`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO `tutorParticular`.`administrador` (`nome`, `email`, `senha`) VALUES ('Igor', 'admin@igor', '123');
INSERT INTO `tutorParticular`.`administrador` (`nome`, `email`, `senha`) VALUES ('Sabrina', 'admin@sabrina', '123');


