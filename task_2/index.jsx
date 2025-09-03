import { Fragment, memo, useMemo } from 'react';

const MainComponent = () => {
  /**
   * Проблема в функции makeLog. Каждый раз при ренедере родилтельского компонента
   * функция создается заново и уходит новым пропсом. Что и приводит к постоннаму рендерингку
   */


    const makeLog = useMemo(()=>console.log('hi from MainComponent'),[]); // function to make logs from MainComponent

    return (
        <Fragment>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
));
