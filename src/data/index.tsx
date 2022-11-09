import React, { useState, useEffect } from "react";
import * as Papa from "papaparse";

const googleSheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtDx8l-qQhNXP84fZukk54dKcZgJjEimhMOxn0zrzSA_0L5LxBkhTK3j71tMVAxU4xMMIIYoypaJjJ/pub?output=csv"

export const useGoogleSheetData = () => {
    const [data, setData] = useState<any>({});

    useEffect(() => {
        Papa.parse(googleSheetUrl, {
            download: true,
            header: true,
            complete: (results) => {
                const parsedData = parseData(results.data)
                setData(parsedData);
                // setData(results.data)
            },
        });
    },[])

    return data
}

const parseData = (rawResponseData: any) => {
    const returnData: any = {}
    rawResponseData.forEach((row: any, index: number) => {
        for (let key in row) {
            if (index === 0) {
                returnData[key] = []
            }
            const cell = row[key]
            if (!!cell) returnData[key].push(cell)
        }
    })
    return returnData
}

export const DataContext = React.createContext<any>({});
