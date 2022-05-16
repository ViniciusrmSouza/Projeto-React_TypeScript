export function timeForSeconds(time : string){
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(":");

    const hoursForSeconds = Number(hours) * 3600;
    const minutesForSeconds = Number(minutes) * 60;

    return hoursForSeconds + minutesForSeconds + Number(seconds);
}