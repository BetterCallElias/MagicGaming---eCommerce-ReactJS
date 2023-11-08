const fetchSimulation = (dataBase, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataBase);
            reject (new Error("Parece que hay un problema con la base de datos"))
        }, time)
    })
}

export default fetchSimulation;