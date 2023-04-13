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
    const chassisTemp = []
    const fanStateA = []
    const PSUVoltage =[]
    const PSUCurrent =[]
    const testModuleFPGAtemp =[]
    const testModuleCPUtemp =[]
    
    data?.forEach((e)=>{
        const chassisTempValue = e["chassis-temp"]
        const fanState = e['fan-status']
        const psuState = e['psu-status']
        const testModuleState = e['test-module-temp']
        if(chassisTempValue.length){
            let ChassisValue= {}
            chassisTempValue?.forEach((e)=>{
                ChassisValue[e["location"]] =  e["temperature"]
            })
         
            chassisTemp.push(ChassisValue)
        }

        if(fanState.length){
            let fanStatusValue= {}
            fanState?.forEach((e)=>{
                fanStatusValue[e["location"]] = e["state"]
            })
         
            fanStateA.push(fanStatusValue)
        }

        if(fanState.length){
            let fanStatusValue= {}
            fanState?.forEach((e)=>{
                fanStatusValue[e["location"]] = e["state"] === "on" ? 100 : 50
            })
         
            fanStateA.push(fanStatusValue)
        }


        if(psuState.length){
            let psuStateVoltageValue= {}
            let psuStateCurrentValue= {}
            psuState?.forEach((e)=>{
                psuStateVoltageValue[e["location"]] = e["voltage"]
                psuStateCurrentValue[e["location"]] = e["current"]
            })
         
            PSUVoltage.push(psuStateVoltageValue)
            PSUCurrent.push(psuStateCurrentValue)
        }


        if(testModuleState.length){
            let testModuleFPGAtempValue= {}
            let testModuleCPUtempValue= {}
            testModuleState?.forEach((e)=>{
                testModuleFPGAtempValue[e["model"]] = e["fpga-temperature"]
                testModuleCPUtempValue[e["model"]] = e["cpu-temperature"]
            })
         
            testModuleFPGAtemp.push(testModuleFPGAtempValue)
            testModuleCPUtemp.push(testModuleCPUtempValue)
        }
    })
const x= data && data[0]
if(x){
    return {
        cardIP: x.ip,
        chassisTemp:chassisTemp,
        fanState:fanStateA,
        PSUVoltage:PSUVoltage,
        PSUCurrent:PSUCurrent, 
        testModuleFPGAtemp:testModuleFPGAtemp,
        testModuleCPUtemp:testModuleCPUtemp
    }
}
return []


}