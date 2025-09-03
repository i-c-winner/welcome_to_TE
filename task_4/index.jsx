// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

/**
 * Тут ответ полный
 * https://codesandbox.io/p/sandbox/task-4-forked-kpsw94?file=%2Fsrc%2FtaskComponents.jsx%3A1%2C1
 */
/**
 * Так себе опитимизация получилась. Просто задание такое досточно широкое
 * Ну я понял что идея вашего вопроса - можно ли вместо трех компонентов использовать
 * один универсальный
 */

import { useState } from "react";

export const Block1 = ({
                         mouseEnterCallbak,
                         imgSrc,
                         imgAlt,
                         content,
                         userData,
                       }) => {
  const [isActive, setActive] = useState(false);

  function mouseEnterHandler(text) {
    setActive(true);
    mouseEnterCallbak(text);
  }

  return (
    <div>
      {imgSrc && (
        <div
          onMouseEnter={() => mouseEnterHandler("Hello from Block1")}
          className={isActive ? "active" : ""}
        >
          <img src={imgSrc} alt={imgAlt} />
        </div>
      )}
      {content && (
        <div
          onMouseEnter={() => mouseEnterHandler("Hello from Block2 ")}
          className={isActive ? "active" : ""}
        >
          <p>{content}</p>
        </div>
      )}
      {userData && (
        <div
          onMouseEnter={() => mouseEnterHandler("Hello from Block3")}
          className={isActive ? "active" : ""}
        >
          <address>
            country: {userData.country}, street: {userData.street}
          </address>
        </div>
      )}
    </div>
  );
};
