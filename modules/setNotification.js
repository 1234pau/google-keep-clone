const setNotification = (date, time, noteValue) => {
    const notTime = new Date(`${date}T${time}`)
    const timeToFire = notTime - new Date()
    setTimeout(() => {
        const notification = new Notification("Hi there!", { body: noteValue.innerHTML });
    }, timeToFire)
}
export { setNotification }