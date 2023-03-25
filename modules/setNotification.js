const setNotification = (date, time, noteValue) => {
    const notTime = new Date(`${date}T${time}`)
    const timeToFire = notTime - new Date()
    setTimeout(() => {
        const notification = new Notification("Hi there!", { body: noteValue.innerHTML });
    }, timeToFire)
}
const setNotificationTop = (date, time, lengthOfItems) => {
    const notTime = new Date(`${date}T${time}`)
    const timeToFire = notTime - new Date()
    setTimeout(() => {
        const notification = new Notification("Hello!", {
            body: `You have selected ${lengthOfItems.innerHTML} elements`,
            // tag: "soManyNotification"
        });
        notification.close()
    }, timeToFire)
}
export { setNotification, setNotificationTop }