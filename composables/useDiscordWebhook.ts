export const useDiscordWebhook = () => {

    const baseUrl = "https://discord.com/api/webhooks/"
    const webhook = {
        contactMessage: "1210967852484399174/NQiTH4vEf3ob3hqowM5u6ivSiWSLjB0OfrjUyj7C9xDqnX2CXienqg-r_DxBv7uFEmdY"
    }
    const getIpInfoApiUrl = "https://ipapi.co/json/";

    const getGoogleMapsCoordinateLink = (lat: number, lon: number) => {
        return "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lon;
    }

    const getIpInfos = async () => {


        const ipInfoRequest = await fetch(getIpInfoApiUrl, { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}});

        if (ipInfoRequest.ok) {
            const infos = ipInfoRequest.json();
            return infos;
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
                color: hexColor("#f87171"),
            }
        }
        return {
            color: hexColor("#0fc6b4"),
            title: "IP: " + ipInfos.ip,
            fields: [
                {
                    name: "Country",
                    value: ipInfos.country_name,
                    inline: true,
                },
                {
                    name: "City",
                    value: ipInfos.city,
                    inline: true,
                },
                {
                    name: "Location",
                    value: "[open GoogleMaps](" + getGoogleMapsCoordinateLink(ipInfos.latitude, ipInfos.longitude) + ")",
                    inline: true,
                },
                {
                    name: "Internet Provider",
                    value: ipInfos.org,
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
        
        try {
            //@ts-ignore
            data.embeds.push(await getClientInfoEmbend());
        } catch {}
        

        request.send(JSON.stringify(data));
    }


    return { sendContactMessage }
}