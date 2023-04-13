export const getNumber =(str)=>{
    if(str){
        const strArr=str?.split("");
        return strArr[strArr?.length-1]
    }

}

export const convertDataToTimeSeries = (data) =>{
    const array = data
    const grouped = array.reduce((acc, obj) => {
        const key = obj.ip;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      return grouped
}

export const getFormatedChassisTimeSeriesValues = (data) =>{
    const chassisTemp = {}
    // data.forEach((e)=>)

}