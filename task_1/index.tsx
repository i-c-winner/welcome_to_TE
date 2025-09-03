import { Component, memo, PureComponent } from 'react';

type IUser = {
    name: string
    age: number
}

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
 * так как memo проводит поверхностную сверку, необходимо добавить сверку на всю глубину пропсов
 */
const SecondComponent = memo(({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
), changeProps);

function changeProps(prevProps: IProps, nextProps: IProps): boolean {
  /**
   * тут логика на проверку пропсов
   * возвращает true or false
   *
   */
  return true;
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
 * та же ситуация с глубиной проверки пропсов
 */
class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    /**
     *  тут логика проверки
     */
    return true; 
  }

  render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}
