interface BallonI {
	id: number;
	isPublic: boolean;
}

/**
 * @description имитация fetch. возвращает количество шариков
 * @param {Number} id ID шарика по цвету
 * @returns {Number} количество шариков
 * @example const res = await fetchBallonAmount(202);
 */
async function fetchBallonAmount(id: BallonI["id"]): Promise<number> {
	const RANDOM_TIMEOUT: number = Math.ceil(Math.random() * 10000); // 1-9 секунд
	const RANDOM_AMOUNT: number = Math.ceil(Math.random() * id); // случайное число

	return new Promise((resolve) =>
		setTimeout(() => resolve(RANDOM_AMOUNT), RANDOM_TIMEOUT)
	);
}

// данные о шариках
const BALLONS: { [key: string]: BallonI } = {
	red: {
		id: 202,
		isPublic: true,
	},
	blue: {
		id: 356,
		isPublic: false,
	},
	yellow: {
		id: 451,
		isPublic: false,
	},
	black: {
		id: 35,
		isPublic: true,
	},
	green: {
		id: 191,
		isPublic: true,
	},
	white: {
		id: 911,
		isPublic: true,
	},
};

// Тут полный ответ https://codesandbox.io/p/sandbox/task-3-forked-t9633z?file=%2Findex.ts%3A1%2C1-67%2C1

/**
 * В реальном React Componente нужно внести в useEffect что бы избежать излишних запросов на сервер
 */
const _ = Object.values(BALLONS).reduce((accum, currentValue) => {
	if (currentValue.isPublic) {
		accum.push(fetchBallonAmount(currentValue.id));
	}
	return accum;
}, []);

Promise.all(_)
	.then((element) => {
		const result = element.reduce((accum, value) => {
			return accum + value;
		}, 0);
		console.log("Общее количество доступных шаров: ", result);
	})
	.then((error) => new Error(error));
