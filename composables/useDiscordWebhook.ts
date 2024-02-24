export const useDiscordWebhook = () => {

    const baseUrl = "https://discord.com/api/webhooks/"
    const webhook = {
        contactMessage: "1210967852484399174/NQiTH4vEf3ob3hqowM5u6ivSiWSLjB0OfrjUyj7C9xDqnX2CXienqg-r_DxBv7uFEmdY"
    }
    const getIpInfoApiUrl = "http://ip-api.com/json/";

    const getGoogleMapsCoordinateLink = (lat: number, lon: number) => {
        return "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lon;
    }

    const getIpInfos = async () => {


        const ipInfoRequest = await fetch(getIpInfoApiUrl, { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}});

        if (ipInfoRequest.ok) {
            const infos = await ipInfoRequest.json();
            if (infos.status == "success") {
                return infos;
            }
        }
        
        return "error";
    }


    const hexColor = (hex: string) => {
        return parseInt(hex.replace("#",""), 16);
    }


    const getClientInfoEmbend = async () => {
        const ipInfos = await getIpInfos();
        if (ipInfos == "error") {
            return {
                title: "Couldn't get Infos!",
                description: "Cause: " + ipInfos.message,
                color: hexColor("#f87171"),
            }
        }
        return {
            color: hexColor("#0fc6b4"),
            title: "IP: " + ipInfos.query,
            fields: [
                {
                    name: "Country",
                    value: ipInfos.country,
                    inline: true,
                },
                {
                    name: "City",
                    value: ipInfos.city + " | " + ipInfos.zip,
                    inline: true,
                },
                {
                    name: "Location",
                    value: "[open GoogleMaps](" + getGoogleMapsCoordinateLink(ipInfos.lat, ipInfos.lon) + ")",
                    inline: true,
                },
                {
                    name: "Internet Provider",
                    value: ipInfos.isp,
                    inline: true,
                },
            ]
        }
    }


    const sendContactMessage = async (fullname: string, mail: string, message: string) => {
        const request = new XMLHttpRequest();
        request.open("POST", baseUrl + webhook.contactMessage);
        request.setRequestHeader('Content-type', 'application/json');

        const data = {
            content: "Hey <@&1210967295736807476>, **" + fullname + "** sent you a message!",
            embeds: [
                {
                    title: fullname + " sent you this:",
                    description: message,
                    timestamp: new Date().toISOString(),
                    color: hexColor("#26A4FF"),
                    footer: {
                        text: mail,
                    }
                }, 
            ],
        };
        //@ts-ignore
        data.embeds.push(await getClientInfoEmbend());

        request.send(JSON.stringify(data));
    }


    return { sendContactMessage }
}