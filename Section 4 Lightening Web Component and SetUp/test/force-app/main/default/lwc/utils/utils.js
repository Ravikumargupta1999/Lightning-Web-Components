export function exportCSVFile(headers, totalData, fileTitle){
    if(!totalData || !totalData.length){
        return null
    }
    const jsonObject = JSON.stringify(totalData)
    const result = convertToCSV(jsonObject, headers)
    if(!result){
        return null
    }
    // console.log(result);
    const blob = new Blob([result])
    // console.log(blob);
    const exportedFileName = fileTitle? fileTitle+'.csv':'export.csv'
    if(navigator.msSaveBlob){
        // console.log('1');
        navigator.msSaveBlob(blob, exportedFileName)
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)){
        // console.log('2');
        const link = window.document.createElement('a')
        link.href='data:text/csv;charset=utf-8,' + encodeURI(result);
        link.target = "_blank"
        link.download=exportedFileName
        link.click()
    } else {
        // console.log('3');
        const link = window.document.createElement('a')
        if(link.download !== undefined){
            const url = URL.createObjectURL(blob)
            link.setAttribute("href", url)
            link.setAttribute("download", exportedFileName)
            link.style.visibility='hidden'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }
}

function convertToCSV(objArray, headers){
    const columnDelimiter = ','
    const lineDelimiter = '\r\n'
    const actualHeaderKey = Object.keys(headers)
    const headerToShow = Object.values(headers)
    
    let str = ''
    str+=headerToShow.join(columnDelimiter)
    str+=lineDelimiter
    const data = typeof objArray !=='object' ? JSON.parse(objArray):objArray
    data.forEach(obj=>{
        let line =''
        actualHeaderKey.forEach(key=>{
            if(line !=''){
                line+=columnDelimiter
            }
            
            let strItem = obj[key] ? obj[key]+'': ''
            line+=strItem? strItem.replace(/,/g, ''):strItem
        })
        str+=line+lineDelimiter
    })
    console.log('str sting');
    console.log(str);
    return str
}