function* idGenerator(initialId = 100): Generator<number> {
    let id = initialId;

    while (true) {
        yield id++;
    }
}

const gen = idGenerator();

export const generateId = (): number => {
    return gen.next().value;
}