import  { Component, memo, PureComponent } from 'react';

type IUser = {
    name: string
    age: number
}]

type IProps = {
    user: IUser
}

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.


/**
 * так как memo проверяет только поверхностно пропсы.
 * то нам необходимо дополнительно добавить проверку на всю глубину пропсов
 */
const SecondComponent = memo(({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
),checkingProps);
function checkingProps(prevProps: IProps, nextProps: IProps) {
  /**
   * тут некая функция которая проверяет пропсы на всю глубину вложенности.
   * Возвращает true или false.
   */
}


// class component
class ThirdComponent extends PureComponent<IUser> {

    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// class component

/**
 * та же история с вложенностью
 */
class FourthComponent extends Component<IProps> {
  nextractedProps = () => {
       const { user } = this.props;
  }
  shouldComponentUpdate(nextProps: IUser) {
    /**
     * тут некая функция, которая проверяет пропсы (state и context) на всю глубину вложенности.
     * Возвращает true или false.
     */
  }
    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}

