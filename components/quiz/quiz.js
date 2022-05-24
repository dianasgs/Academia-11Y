import BackArrow from "./../backarrow/backarrow";
import Header from "./../header/header";
import styles from "./quiz.module.css";
import db from "./../../data/db.json";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Quiz({ id }) {
  const router = useRouter();

  const quiz = db[id];

  const [questionID, setQuestionID] = useState(0);
  let question = quiz.questions[questionID];

  const [selectedAlt, setSelectedAlt] = useState(-1);

  const [confirmed, setConfirmed] = useState(false);

  const nextQuestion = (e) => {
    setQuestionID(questionID + 1);
    setSelectedAlt(-1);
    setConfirmed(false);
  };

  const selectAlt = (id) => {
    if (confirmed) return;

    setSelectedAlt(id);
  };

  const confirm = (e) => {
    setConfirmed(true);
  };

  const nextLesson = (id) => {
    localStorage.setItem(`a11y:${id - 1}`, "true");
    if (lastQuiz) {
      router.push("/");
    } else {
      router.push(`/lesson/${id}`);
    }
  };

  //TODO: mudar de ul, li pra radio / Botar aria live nas áreas que mudam dinamicamente.
  if (question) {
    var alternativeList = question.alternatives.map((alternative, i) => (
      <li
        tabIndex={0}
        role="radio"
        key={`alternative-${i}`}
        onClick={() => selectAlt(i)}
        onKeyDown={(e) => {
          if (e.key !== "Enter" && e.key !== " ") return;
          selectAlt(i);
        }}
        aria-checked={i == selectedAlt ? true : false}
        className={`
                    ${styles.alternative} 
                    ${i == selectedAlt && !confirmed ? styles.selected : ""}
                    ${
                      i == selectedAlt && confirmed && !alternative.correct
                        ? styles.wrong
                        : ""
                    }
                    ${confirmed && alternative.correct ? styles.correct : ""}
                    `}
        aria-label={`${confirmed && alternative.correct ? "Resposta certa" : ""}
        ${confirmed && !alternative.correct ? "Resposta errada" : ""}
        `}
      >
        {alternative.text}{" "}
        <i
          aria-hidden={true}
          className={`${
            i == selectedAlt && confirmed && !alternative.correct
              ? "bi bi-x-circle"
              : ""
          }
          ${confirmed && alternative.correct ? "bi bi-check-circle" : ""}
          ${
            confirmed && !alternative.correct && i != selectedAlt
              ? styles.ihidden
              : ""
          }
          
          `}
        ></i>
      </li>
    ));
  }

  let lastQuestion = questionID > quiz.questions.length - 1;
  let lastQuiz = id > Object.keys(db).length - 1;

  return (
    <>
      <BackArrow />
      <Header />
      <div className={`flex ${styles.main}`}>
        <h1 className={styles.h1Quiz}>
          Quiz {id} - {quiz.title}
        </h1>

        {lastQuestion && !lastQuiz && (
          <>
            <i className={`bi bi-patch-check ${styles.iCheck}`}></i>
            <p>
              Parabéns! Você concluiu o quiz {id} e agora já sabe um pouco mais
              sobre {quiz.title}.
            </p>

            <button onClick={() => nextLesson(id + 1)}>Próxima lição</button>
          </>
        )}
        {lastQuestion && lastQuiz && (
          <>
            <i className={`bi bi-patch-check ${styles.iCheck}`}></i>
            <p>
              Parabéns! Você concluiu o quiz {id} e completou a Academia 11Y.
            </p>

            <button onClick={() => nextLesson(id + 1)}>
              Voltar para página inicial
            </button>
          </>
        )}

        {!lastQuestion && (
          <>
            <p aria-labelledby="pergunta">
              {" "}
              Questão {questionID + 1} de {quiz.questions.length} -{" "}
              {question.statement}
            </p>

            <ul role="radiogroup" className={styles.list}>
              {alternativeList}
            </ul>
          </>
        )}

        {confirmed && question.explanation}

        {!confirmed && questionID < quiz.questions.length && (
          <button
            disabled={selectedAlt < 0 ? "disabled" : ""}
            className={styles.btn}
            onClick={confirm}
          >
            Confirmar
          </button>
        )}

        {confirmed && (
          <button className={styles.btn} onClick={nextQuestion}>
            Próxima
          </button>
        )}
      </div>
    </>
  );
}
