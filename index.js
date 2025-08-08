const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3500;


app.get("/", (req, res) => {
    const records = dataList();
    return res.send(records);
})


app.get("/:id", (req, res) => {

    const records = dataList().find(data => data.id === req.params.id);
    return res.send(records);
})


app.get("/search-name/:keyword", (req, res) => {
    const records =  dataList().filter(data => data.name.indexOf(req.params.keyword));
    return res.send(records);
})




app.listen(port, () => {console.log("Server is running on port: http://localhost:" + port)});













function dataList(){
    return [
        {
            "id": 1,
            "name": "Evelyn Jones",
            "email": "evelyn.jones@example.com",
            "password": "password123",
            "address": "123 Maple St, Anytown, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 2,
            "name": "Robert Davis",
            "email": "robert.davis@example.com",
            "password": "securePass456",
            "address": "456 Oak Ave, Somewhere, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 3,
            "name": "Patricia Miller",
            "email": "patricia.miller@example.com",
            "password": "strongPass789",
            "address": "789 Pine Ln, Nowhere, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 4,
            "name": "Michael Wilson",
            "email": "michael.wilson@example.com",
            "password": "mySecureP@ss",
            "address": "101 Birch Rd, Metropolis, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 5,
            "name": "Linda Moore",
            "email": "linda.moore@example.com",
            "password": "anotherStrongOne",
            "address": "202 Cedar Pl, Cityville, USA",
            "purchaseCount": 15,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 6,
            "name": "James Taylor",
            "email": "james.taylor@example.com",
            "password": "passcode123",
            "address": "303 Elm Blvd, Townsville, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Camera"
        },
        {
            "id": 7,
            "name": "Barbara Anderson",
            "email": "barbara.anderson@example.com",
            "password": "passwordA1b2C3",
            "address": "404 Fir Ct, Villagetown, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Printer"
        },
        {
            "id": 8,
            "name": "Richard Thomas",
            "email": "richard.thomas@example.com",
            "password": "secure!P@ssw0rd",
            "address": "505 Poplar Rd, Hamlet, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 9,
            "name": "Susan Jackson",
            "email": "susan.jackson@example.com",
            "password": "myP@sswordIsSafe",
            "address": "606 Spruce Dr, Suburbia, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 10,
            "name": "Charles White",
            "email": "charles.white@example.com",
            "password": "testP@ssw0rd",
            "address": "707 Walnut Ave, Countryside, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 11,
            "name": "Elizabeth Harris",
            "email": "elizabeth.harris@example.com",
            "password": "securePassw0rd!",
            "address": "808 Aspen Blvd, Lakeside, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 12,
            "name": "Joseph Martin",
            "email": "joseph.martin@example.com",
            "password": "P@ssw0rd123",
            "address": "909 Cedar Ln, Riverside, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 13,
            "name": "Nancy Thompson",
            "email": "nancy.thompson@example.com",
            "password": "mySecurePassword",
            "address": "111 Cherry St, Bayville, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Router"
        },
        {
            "id": 14,
            "name": "Daniel Garcia",
            "email": "daniel.garcia@example.com",
            "password": "secureP@ss123",
            "address": "222 Chestnut Ave, Hilltop, USA",
            "purchaseCount": 1,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 15,
            "name": "Jessica Martinez",
            "email": "jessica.martinez@example.com",
            "password": "passwordTest",
            "address": "333 Dogwood Ln, Seaport, USA",
            "purchaseCount": 14,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 16,
            "name": "Christopher Robinson",
            "email": "christopher.robinson@example.com",
            "password": "P@ssw0rdtest",
            "address": "444 Elm Ct, Greenfield, USA",
            "purchaseCount": 5,
            "maximumProductBought": "SSD"
        },
        {
            "id": 17,
            "name": "Sarah Clark",
            "email": "sarah.clark@example.com",
            "password": "securePassw0rd!",
            "address": "555 Fir St, Oakwood, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 18,
            "name": "Matthew Rodriguez",
            "email": "matthew.rodriguez@example.com",
            "password": "testP@ssw0rd!",
            "address": "666 Grove Ave, Pinecrest, USA",
            "purchaseCount": 3,
            "maximumProductBought": "RAM"
        },
        {
            "id": 19,
            "name": "Dorothy Lewis",
            "email": "dorothy.lewis@example.com",
            "password": "anotherTestP@ss",
            "address": "777 Holly Ln, Cedar Creek, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Processor"
        },
        {
            "id": 20,
            "name": "Kevin Lee",
            "email": "kevin.lee@example.com",
            "password": "passW0rd123!",
            "address": "888 Ironwood Dr, Maplewood, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 21,
            "name": "Betty Walker",
            "email": "betty.walker@example.com",
            "password": "secureP@ssw0rd",
            "address": "999 Juniper Blvd, Birchwood, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 22,
            "name": "Donald Hall",
            "email": "donald.hall@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "111 King St, Redwood, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Case"
        },
        {
            "id": 23,
            "name": "Ashley Allen",
            "email": "ashley.allen@example.com",
            "password": "strongP@ssw0rd!",
            "address": "222 Laurel Ave, Willow Creek, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Fan"
        },
        {
            "id": 24,
            "name": "Mark Young",
            "email": "mark.young@example.com",
            "password": "passwordA1b2C3D4",
            "address": "333 Magnolia Ln, Silver Lake, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 25,
            "name": "Karen King",
            "email": "karen.king@example.com",
            "password": "test!P@ssw0rd",
            "address": "444 Oak St, Golden Valley, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 26,
            "name": "Steven Wright",
            "email": "steven.wright@example.com",
            "password": "P@ssw0rdTest1",
            "address": "555 Pine Ave, Sunnydale, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 27,
            "name": "Donna Scott",
            "email": "donna.scott@example.com",
            "password": "secure!P@ssw0rd!",
            "address": "666 Quail Ct, Shady Grove, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 28,
            "name": "Paul Green",
            "email": "paul.green@example.com",
            "password": "mYp@ssw0rd",
            "address": "777 Redwood Blvd, Green Acres, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 29,
            "name": "Carol Adams",
            "email": "carol.adams@example.com",
            "password": "secureP@ss1234",
            "address": "888 Sycamore Ln, Lakeside, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 30,
            "name": "George Baker",
            "email": "george.baker@example.com",
            "password": "P@ssw0rd",
            "address": "999 Tanglewood Dr, Meadowbrook, USA",
            "purchaseCount": 15,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 31,
            "name": "Michelle Mitchell",
            "email": "michelle.mitchell@example.com",
            "password": "password123!",
            "address": "111 University St, College Town, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 32,
            "name": "Edward Roberts",
            "email": "edward.roberts@example.com",
            "password": "secureP@ssword",
            "address": "222 Victoria Ave, University Heights, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 33,
            "name": "Sarah Turner",
            "email": "sarah.turner@example.com",
            "password": "P@ssw0rdTest2",
            "address": "333 Willow Ct, Riverbend, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Camera"
        },
        {
            "id": 34,
            "name": "Jason Phillips",
            "email": "jason.phillips@example.com",
            "password": "mypassword123",
            "address": "444 Xanadu Ln, Port City, USA",
            "purchaseCount": 1,
            "maximumProductBought": "Printer"
        },
        {
            "id": 35,
            "name": "Margaret Campbell",
            "email": "margaret.campbell@example.com",
            "password": "secureP@ssw0rd!",
            "address": "555 Yorkshire Rd, Harbor View, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 36,
            "name": "Samuel Parker",
            "email": "samuel.parker@example.com",
            "password": "anotherP@ssw0rd",
            "address": "666 Zenith Blvd, Oceanfront, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 37,
            "name": "Lisa Evans",
            "email": "lisa.evans@example.com",
            "password": "P@sswordIsSafe",
            "address": "777 Alpha Dr, Sunset Hills, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 38,
            "name": "Brian Collins",
            "email": "brian.collins@example.com",
            "password": "testpassword123",
            "address": "888 Beta Ave, Sunrise Valley, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 39,
            "name": "Deborah Stewart",
            "email": "deborah.stewart@example.com",
            "password": "secureP@ssw0rd321",
            "address": "999 Gamma Ln, Star City, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 40,
            "name": "Stephen Morris",
            "email": "stephen.morris@example.com",
            "password": "passwordSecure!",
            "address": "111 Delta Ct, Northwood, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Router"
        },
        {
            "id": 41,
            "name": "Helen Rogers",
            "email": "helen.rogers@example.com",
            "password": "P@ssw0rd456!",
            "address": "222 Echo Rd, Southwood, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 42,
            "name": "Jeffrey Reed",
            "email": "jeffrey.reed@example.com",
            "password": "secure!password",
            "address": "333 Foxtrot St, Westwood, USA",
            "purchaseCount": 3,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 43,
            "name": "Amy Bell",
            "email": "amy.bell@example.com",
            "password": "anotherSecureP@ss",
            "address": "444 Golf Blvd, Eastwood, USA",
            "purchaseCount": 10,
            "maximumProductBought": "SSD"
        },
        {
            "id": 44,
            "name": "Scott Ward",
            "email": "scott.ward@example.com",
            "password": "passW0rdtest",
            "address": "555 Hotel Ave, Forestville, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 45,
            "name": "Kimberly Foster",
            "email": "kimberly.foster@example.com",
            "password": "P@ssw0rd789",
            "address": "666 India Ln, Woodland, USA",
            "purchaseCount": 4,
            "maximumProductBought": "RAM"
        },
        {
            "id": 46,
            "name": "Patrick Ross",
            "email": "patrick.ross@example.com",
            "password": "secure!P@ssword!",
            "address": "777 Juliet Dr, Riverwood, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Processor"
        },
        {
            "id": 47,
            "name": "Angela Cox",
            "email": "angela.cox@example.com",
            "password": "mySecureP@ss!",
            "address": "888 Kilo Ct, Lakeview, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 48,
            "name": "Frank Peterson",
            "email": "frank.peterson@example.com",
            "password": "P@ssw0rd!test",
            "address": "999 Lima St, Mountain View, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 49,
            "name": "Brenda Kelly",
            "email": "brenda.kelly@example.com",
            "password": "secureP@ssw0rdtest",
            "address": "111 Mike Rd, Valley Forge, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Case"
        },
        {
            "id": 50,
            "name": "Eric Carter",
            "email": "eric.carter@example.com",
            "password": "P@ssw0rdA1B2C3",
            "address": "222 November Ave, Highlands, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Fan"
        },
        {
            "id": 51,
            "name": "Catherine Powell",
            "email": "catherine.powell@example.com",
            "password": "testP@ssw0rd789",
            "address": "333 Oscar Blvd, Spring Valley, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 52,
            "name": "Gregory Ross",
            "email": "gregory.ross@example.com",
            "password": "secure!P@ssw0rd",
            "address": "444 Papa Ln, Winter Garden, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 53,
            "name": "Diana Sanchez",
            "email": "diana.sanchez@example.com",
            "password": "mySecureP@ssw0rd!",
            "address": "555 Quebec Ct, Summerfield, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 54,
            "name": "Raymond King",
            "email": "raymond.king@example.com",
            "password": "P@ssw0rdtest123",
            "address": "666 Romeo Rd, Autumn Woods, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 55,
            "name": "Marie Scott",
            "email": "marie.scott@example.com",
            "password": "secure!P@ssw0rdA",
            "address": "777 Sierra St, Spring Hill, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 56,
            "name": "Jeremy Baker",
            "email": "jeremy.baker@example.com",
            "password": "P@ssw0rd!",
            "address": "888 Tango Ave, Woodland Hills, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 57,
            "name": "Kathryn Green",
            "email": "kathryn.green@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "999 Uniform Blvd, Forest Lake, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 58,
            "name": "Walter Hill",
            "email": "walter.hill@example.com",
            "password": "testP@ssw0rd123",
            "address": "111 Victor Ln, Riverfront, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 59,
            "name": "Virginia Adams",
            "email": "virginia.adams@example.com",
            "password": "P@ssw0rdSecure!",
            "address": "222 Whiskey Ct, Green Valley, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 60,
            "name": "Gerald Wright",
            "email": "gerald.wright@example.com",
            "password": "anotherSecureP@ss",
            "address": "333 X-ray Rd, Highland Park, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Camera"
        },
        {
            "id": 61,
            "name": "Pamela Evans",
            "email": "pamela.evans@example.com",
            "password": "P@ssw0rd!test",
            "address": "444 Yankee St, Sunny Hills, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Printer"
        },
        {
            "id": 62,
            "name": "Dennis Turner",
            "email": "dennis.turner@example.com",
            "password": "secureP@ssw0rd!45",
            "address": "555 Zulu Ave, Pleasantville, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 63,
            "name": "Joan Collins",
            "email": "joan.collins@example.com",
            "password": "mySecureP@ss",
            "address": "666 Amber Ln, Fairfield, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 64,
            "name": "Jerry Baker",
            "email": "jerry.baker@example.com",
            "password": "P@ssw0rd!test123",
            "address": "777 Beryl Dr, Northfield, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 65,
            "name": "Judith Hall",
            "email": "judith.hall@example.com",
            "password": "secureP@ssw0rd1!",
            "address": "888 Coral Ct, Southfield, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 66,
            "name": "Henry Wright",
            "email": "henry.wright@example.com",
            "password": "test!P@ssw0rd",
            "address": "999 Diamond Rd, Eastfield, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 67,
            "name": "Cheryl Miller",
            "email": "cheryl.miller@example.com",
            "password": "P@ssw0rdSecure",
            "address": "111 Emerald St, Westfield, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Router"
        },
        {
            "id": 68,
            "name": "Peter Clark",
            "email": "peter.clark@example.com",
            "password": "myP@ssw0rdIsSafe",
            "address": "222 Fossil Ave, Midfield, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 69,
            "name": "Andrea Lopez",
            "email": "andrea.lopez@example.com",
            "password": "P@ssw0rdA1b2c3",
            "address": "333 Gold Ln, Uptown, USA",
            "purchaseCount": 4,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 70,
            "name": "Phillip Scott",
            "email": "phillip.scott@example.com",
            "password": "secure!P@ssw0rdTest",
            "address": "444 Jade Ct, Downtown, USA",
            "purchaseCount": 12,
            "maximumProductBought": "SSD"
        },
        {
            "id": 71,
            "name": "Christina White",
            "email": "christina.white@example.com",
            "password": "testP@ssw0rdSecure",
            "address": "555 Onyx Rd, Center City, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 72,
            "name": "Ralph Allen",
            "email": "ralph.allen@example.com",
            "password": "password!123",
            "address": "666 Pearl Blvd, New City, USA",
            "purchaseCount": 9,
            "maximumProductBought": "RAM"
        },
        {
            "id": 73,
            "name": "Denise Turner",
            "email": "denise.turner@example.com",
            "password": "mySecureP@ssw0rd!",
            "address": "777 Quartz Ln, Old Town, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Processor"
        },
        {
            "id": 74,
            "name": "Lawrence Hall",
            "email": "lawrence.hall@example.com",
            "password": "P@ssw0rdtest321",
            "address": "888 Ruby Dr, Metropolis, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 75,
            "name": "Judith Martin",
            "email": "judith.martin@example.com",
            "password": "secureP@ssw0rd!A",
            "address": "999 Sapphire Ave, Capital City, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 76,
            "name": "William Jackson",
            "email": "william.jackson@example.com",
            "password": "password!test",
            "address": "111 Topaz St, Urbanville, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Case"
        },
        {
            "id": 77,
            "name": "Teresa Garcia",
            "email": "teresa.garcia@example.com",
            "password": "P@ssw0rdTest456",
            "address": "222 Zircon Ct, Bustleton, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Fan"
        },
        {
            "id": 78,
            "name": "Roy Evans",
            "email": "roy.evans@example.com",
            "password": "secureP@ssw0rdTest!",
            "address": "333 Amethyst Rd, Riverdale, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 79,
            "name": "Nicole Wilson",
            "email": "nicole.wilson@example.com",
            "password": "anotherP@ssw0rd1",
            "address": "444 Beryl Ln, Greenwood, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 80,
            "name": "Jesse Moore",
            "email": "jesse.moore@example.com",
            "password": "P@ssw0rd!secure",
            "address": "555 Citrine Dr, Sunnybrook, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 81,
            "name": "Alice Thompson",
            "email": "alice.thompson@example.com",
            "password": "mySecureP@ssw0rd!",
            "address": "666 Diamond Ct, Clear Lake, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 82,
            "name": "Aaron White",
            "email": "aaron.white@example.com",
            "password": "testP@ssw0rd!",
            "address": "777 Emerald Blvd, Forest Hills, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 83,
            "name": "Julie Garcia",
            "email": "julie.garcia@example.com",
            "password": "secure!P@ssw0rd",
            "address": "888 Garnet Ave, Pine Valley, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 84,
            "name": "Joe Hall",
            "email": "joe.hall@example.com",
            "password": "P@ssw0rdTestA1",
            "address": "999 Jasper Rd, Eagle's Nest, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 85,
            "name": "Christine Hernandez",
            "email": "christine.hernandez@example.com",
            "password": "mySecureP@ss",
            "address": "111 Opal St, Falcon Heights, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 86,
            "name": "Arthur Robinson",
            "email": "arthur.robinson@example.com",
            "password": "secureP@ssw0rd123",
            "address": "222 Peridot Ln, Hawk's Ridge, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 87,
            "name": "Sharon Scott",
            "email": "sharon.scott@example.com",
            "password": "P@ssw0rd!test2",
            "address": "333 Quartz Ct, Robin's Wood, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Camera"
        },
        {
            "id": 88,
            "name": "Roger Lopez",
            "email": "roger.lopez@example.com",
            "password": "testP@ssw0rdSecure!",
            "address": "444 Ruby Rd, Sparrow Meadows, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Printer"
        },
        {
            "id": 89,
            "name": "Cynthia Davis",
            "email": "cynthia.davis@example.com",
            "password": "anotherP@ssw0rd!",
            "address": "555 Sapphire St, Wren's Nest, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 90,
            "name": "Jose Wilson",
            "email": "jose.wilson@example.com",
            "password": "P@ssw0rdA1B2C",
            "address": "666 Topaz Ave, Nightingale Grove, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 91,
            "name": "Maria Hernandez",
            "email": "maria.hernandez@example.com",
            "password": "secure!P@ssw0rd1",
            "address": "777 Zircon Ln, Cardinal Park, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 92,
            "name": "Michael Martinez",
            "email": "michael.martinez@example.com",
            "password": "mySecureP@ssw0rd3",
            "address": "888 Amethyst Dr, Blue Jay Point, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 93,
            "name": "Katherine Miller",
            "email": "katherine.miller@example.com",
            "password": "P@ssw0rdTestSecure",
            "address": "999 Beryl Ct, Oriole Valley, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 94,
            "name": "Frank White",
            "email": "frank.white@example.com",
            "password": "secureP@ssw0rd!3",
            "address": "111 Citrine Rd, Meadowlark Fields, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Router"
        },
        {
            "id": 95,
            "name": "Shirley Davis",
            "email": "shirley.davis@example.com",
            "password": "P@ssw0rd!test1",
            "address": "222 Diamond St, Finch Ridge, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 96,
            "name": "Larry Moore",
            "email": "larry.moore@example.com",
            "password": "testP@ssw0rd!",
            "address": "333 Emerald Ave, Dove Creek, USA",
            "purchaseCount": 9,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 97,
            "name": "Pamela Wilson",
            "email": "pamela.wilson@example.com",
            "password": "secure!P@ssw0rdTest1",
            "address": "444 Garnet Ln, Kestrel Heights, USA",
            "purchaseCount": 2,
            "maximumProductBought": "SSD"
        },
        {
            "id": 98,
            "name": "Henry Taylor",
            "email": "henry.taylor@example.com",
            "password": "P@ssw0rdA1b2c",
            "address": "555 Jasper Dr, Owl's Nest, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 99,
            "name": "Laura Anderson",
            "email": "laura.anderson@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "666 Opal Ct, Pelican Point, USA",
            "purchaseCount": 13,
            "maximumProductBought": "RAM"
        },
        {
            "id": 100,
            "name": "Bruce Thomas",
            "email": "bruce.thomas@example.com",
            "password": "P@ssw0rd!test4",
            "address": "777 Peridot Rd, Kingfisher Cove, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Processor"
        },
        {
            "id": 101,
            "name": "Joyce Martinez",
            "email": "joyce.martinez@example.com",
            "password": "secureP@ssw0rd!5",
            "address": "888 Quartz St, Swan Lake, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 102,
            "name": "Douglas Johnson",
            "email": "douglas.johnson@example.com",
            "password": "test!P@ssw0rdA",
            "address": "999 Ruby Ave, Heron Creek, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 103,
            "name": "Deborah Wright",
            "email": "deborah.wright@example.com",
            "password": "P@ssw0rdSecure1",
            "address": "111 Sapphire Ln, Heron's Rest, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Case"
        },
        {
            "id": 104,
            "name": "Russell White",
            "email": "russell.white@example.com",
            "password": "myP@ssw0rdTest",
            "address": "222 Topaz Dr, Egret Landing, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Fan"
        },
        {
            "id": 105,
            "name": "Sharon Wilson",
            "email": "sharon.wilson@example.com",
            "password": "secureP@ssw0rd!test2",
            "address": "333 Zircon Ct, Crane's Crossing, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 106,
            "name": "Timothy Evans",
            "email": "timothy.evans@example.com",
            "password": "P@ssw0rdA1b2c3",
            "address": "444 Amethyst Rd, Falcon's Creek, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 107,
            "name": "Carolyn King",
            "email": "carolyn.king@example.com",
            "password": "secure!P@ssw0rd!",
            "address": "555 Beryl St, Eagle's Peak, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 108,
            "name": "Craig Collins",
            "email": "craig.collins@example.com",
            "password": "testP@ssw0rdSecure",
            "address": "666 Citrine Ave, Hawk's Landing, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 109,
            "name": "Debra Scott",
            "email": "debra.scott@example.com",
            "password": "password!234",
            "address": "777 Diamond Ln, Vulture Point, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 110,
            "name": "Gary Green",
            "email": "gary.green@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "888 Emerald Dr, Condor Creek, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 111,
            "name": "Helen Young",
            "email": "helen.young@example.com",
            "password": "P@ssw0rdTest!",
            "address": "999 Garnet Ct, Buzzard Bluff, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 112,
            "name": "Terry Adams",
            "email": "terry.adams@example.com",
            "password": "secureP@ssw0rd123!",
            "address": "111 Jasper Rd, Osprey Overlook, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 113,
            "name": "Rebecca Parker",
            "email": "rebecca.parker@example.com",
            "password": "test!P@ssw0rd",
            "address": "222 Opal St, Kite's Landing, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 114,
            "name": "Phillip Turner",
            "email": "phillip.turner@example.com",
            "password": "anotherP@ssw0rd!",
            "address": "333 Peridot Ave, Harrier Heights, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Camera"
        },
        {
            "id": 115,
            "name": "Dorothy Lewis",
            "email": "dorothy.lewis@example.com",
            "password": "P@ssw0rdA1B2C",
            "address": "444 Quartz Ln, Goshawk Grove, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Printer"
        },
        {
            "id": 116,
            "name": "Wayne Mitchell",
            "email": "wayne.mitchell@example.com",
            "password": "secure!P@ssw0rd1",
            "address": "555 Ruby Dr, Finch Field, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 117,
            "name": "Rose Evans",
            "email": "rose.evans@example.com",
            "password": "mySecureP@ssw0rd4",
            "address": "666 Sapphire Ct, Robin's Wood, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 118,
            "name": "Frank White",
            "email": "frank.white@example.com",
            "password": "P@ssw0rdTestSecure",
            "address": "777 Topaz Rd, Sparrow's Nest, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 119,
            "name": "Evelyn Hall",
            "email": "evelyn.hall@example.com",
            "password": "secureP@ssw0rd!4",
            "address": "888 Zircon St, Bluebird Brook, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 120,
            "name": "Dennis Turner",
            "email": "dennis.turner@example.com",
            "password": "P@ssw0rd!test2",
            "address": "999 Amethyst Ave, Goldfinch Glen, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 121,
            "name": "Frances Rodriguez",
            "email": "frances.rodriguez@example.com",
            "password": "testP@ssw0rdSecure!",
            "address": "111 Beryl Ln, Jaybird Junction, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Router"
        },
        {
            "id": 122,
            "name": "Willie Martinez",
            "email": "willie.martinez@example.com",
            "password": "anotherP@ssw0rd3",
            "address": "222 Citrine Dr, Magpie Meadow, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 123,
            "name": "Paula Thompson",
            "email": "paula.thompson@example.com",
            "password": "P@ssw0rdA1b2",
            "address": "333 Diamond Ct, Cardinal Creek, USA",
            "purchaseCount": 13,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 124,
            "name": "Joe Hall",
            "email": "joe.hall@example.com",
            "password": "secure!P@ssw0rd2",
            "address": "444 Emerald Rd, Robin Ridge, USA",
            "purchaseCount": 5,
            "maximumProductBought": "SSD"
        },
        {
            "id": 125,
            "name": "Nancy Green",
            "email": "nancy.green@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "555 Garnet St, Eagle's Perch, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 126,
            "name": "Phillip Wilson",
            "email": "phillip.wilson@example.com",
            "password": "P@ssw0rdTest1",
            "address": "666 Jasper Ave, Falcon's Point, USA",
            "purchaseCount": 3,
            "maximumProductBought": "RAM"
        },
        {
            "id": 127,
            "name": "Anna Davis",
            "email": "anna.davis@example.com",
            "password": "secureP@ssw0rd!5",
            "address": "777 Opal Ln, Hawk's Roost, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Processor"
        },
        {
            "id": 128,
            "name": "Walter Young",
            "email": "walter.young@example.com",
            "password": "test!P@ssw0rd2",
            "address": "888 Peridot Dr, Vulture Valley, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 129,
            "name": "Jennifer Turner",
            "email": "jennifer.turner@example.com",
            "password": "P@ssw0rdSecure!",
            "address": "999 Quartz Ct, Condor Creek, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 130,
            "name": "Benjamin Moore",
            "email": "benjamin.moore@example.com",
            "password": "myP@ssw0rdIsSafe",
            "address": "111 Ruby Rd, Buzzard's Nest, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Case"
        },
        {
            "id": 131,
            "name": "Judith Garcia",
            "email": "judith.garcia@example.com",
            "password": "secureP@ssw0rdtest",
            "address": "222 Sapphire St, Osprey Point, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Fan"
        },
        {
            "id": 132,
            "name": "Jeffrey Scott",
            "email": "jeffrey.scott@example.com",
            "password": "P@ssw0rd!test3",
            "address": "333 Topaz Ave, Kite's Crossing, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 133,
            "name": "Brenda King",
            "email": "brenda.king@example.com",
            "password": "testP@ssw0rd!Secure",
            "address": "444 Zircon Ln, Harrier Heights, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 134,
            "name": "Robert Evans",
            "email": "robert.evans@example.com",
            "password": "anotherP@ssw0rd4",
            "address": "555 Amethyst Dr, Goshawk Grove, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 135,
            "name": "Carol Adams",
            "email": "carol.adams@example.com",
            "password": "P@ssw0rdA1b2c",
            "address": "666 Beryl Ct, Finch Field, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 136,
            "name": "Ronald Wilson",
            "email": "ronald.wilson@example.com",
            "password": "secure!P@ssw0rd",
            "address": "777 Citrine Rd, Robin's Wood, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 137,
            "name": "Shirley Miller",
            "email": "shirley.miller@example.com",
            "password": "mySecureP@ssw0rd5",
            "address": "888 Diamond St, Sparrow's Nest, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 138,
            "name": "Gregory Davis",
            "email": "gregory.davis@example.com",
            "password": "P@ssw0rdTest12",
            "address": "999 Emerald Ave, Bluebird Brook, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 139,
            "name": "Teresa White",
            "email": "teresa.white@example.com",
            "password": "secureP@ssw0rd!6",
            "address": "111 Garnet Ln, Goldfinch Glen, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 140,
            "name": "Patrick Harris",
            "email": "patrick.harris@example.com",
            "password": "test!P@ssw0rdA1",
            "address": "222 Jasper Dr, Jaybird Junction, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 141,
            "name": "Debra Allen",
            "email": "debra.allen@example.com",
            "password": "P@ssw0rdSecure",
            "address": "333 Opal Ct, Magpie Meadow, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Camera"
        },
        {
            "id": 142,
            "name": "Joseph Evans",
            "email": "joseph.evans@example.com",
            "password": "myP@ssw0rdIsSafe!",
            "address": "444 Peridot Rd, Cardinal Creek, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Printer"
        },
        {
            "id": 143,
            "name": "Sandra Martin",
            "email": "sandra.martin@example.com",
            "password": "secureP@ssw0rdTest",
            "address": "555 Quartz St, Robin Ridge, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 144,
            "name": "Thomas Turner",
            "email": "thomas.turner@example.com",
            "password": "P@ssw0rd!test4",
            "address": "666 Ruby Ave, Eagle's Perch, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 145,
            "name": "Brenda Jackson",
            "email": "brenda.jackson@example.com",
            "password": "testP@ssw0rdSecure!",
            "address": "777 Sapphire Ln, Falcon's Point, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 146,
            "name": "Daniel Davis",
            "email": "daniel.davis@example.com",
            "password": "anotherP@ssw0rd5",
            "address": "888 Topaz Dr, Hawk's Roost, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 147,
            "name": "Cynthia Wilson",
            "email": "cynthia.wilson@example.com",
            "password": "P@ssw0rdA1B2C",
            "address": "999 Zircon Ct, Vulture Valley, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 148,
            "name": "George Evans",
            "email": "george.evans@example.com",
            "password": "secure!P@ssw0rd",
            "address": "111 Amethyst Rd, Condor Creek, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Router"
        },
        {
            "id": 149,
            "name": "Mary King",
            "email": "mary.king@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "222 Beryl St, Buzzard's Nest, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 150,
            "name": "Steven Wright",
            "email": "steven.wright@example.com",
            "password": "P@ssw0rdTest123",
            "address": "333 Citrine Ave, Osprey Point, USA",
            "purchaseCount": 3,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 151,
            "name": "Betty Davis",
            "email": "betty.davis@example.com",
            "password": "secureP@ssw0rd!7",
            "address": "444 Diamond Ln, Kite's Crossing, USA",
            "purchaseCount": 10,
            "maximumProductBought": "SSD"
        },
        {
            "id": 152,
            "name": "Donald Hall",
            "email": "donald.hall@example.com",
            "password": "test!P@ssw0rdB",
            "address": "555 Emerald Dr, Harrier Heights, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 153,
            "name": "Ashley Wilson",
            "email": "ashley.wilson@example.com",
            "password": "P@ssw0rdSecure1",
            "address": "666 Garnet Ct, Goshawk Grove, USA",
            "purchaseCount": 4,
            "maximumProductBought": "RAM"
        },
        {
            "id": 154,
            "name": "Mark Miller",
            "email": "mark.miller@example.com",
            "password": "myP@ssw0rdTest",
            "address": "777 Jasper Rd, Finch Field, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Processor"
        },
        {
            "id": 155,
            "name": "Karen Evans",
            "email": "karen.evans@example.com",
            "password": "secureP@ssw0rd!test3",
            "address": "888 Opal St, Robin's Wood, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 156,
            "name": "Steven Turner",
            "email": "steven.turner@example.com",
            "password": "P@ssw0rdA1b2c3",
            "address": "999 Peridot Ave, Sparrow's Nest, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 157,
            "name": "Donna Scott",
            "email": "donna.scott@example.com",
            "password": "secure!P@ssw0rd!",
            "address": "111 Quartz Ln, Bluebird Brook, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Case"
        },
        {
            "id": 158,
            "name": "Paul Green",
            "email": "paul.green@example.com",
            "password": "testP@ssw0rdSecure",
            "address": "222 Ruby Dr, Goldfinch Glen, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Fan"
        },
        {
            "id": 159,
            "name": "Carol Adams",
            "email": "carol.adams@example.com",
            "password": "password!345",
            "address": "333 Sapphire Ct, Jaybird Junction, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 160,
            "name": "George Baker",
            "email": "george.baker@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "444 Topaz Rd, Magpie Meadow, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 161,
            "name": "Michelle Mitchell",
            "email": "michelle.mitchell@example.com",
            "password": "P@ssw0rdTest!",
            "address": "555 Zircon St, Cardinal Creek, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 162,
            "name": "Edward Roberts",
            "email": "edward.roberts@example.com",
            "password": "secureP@ssw0rd123!",
            "address": "666 Amethyst Ave, Robin Ridge, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 163,
            "name": "Sarah Turner",
            "email": "sarah.turner@example.com",
            "password": "test!P@ssw0rd",
            "address": "777 Beryl Ln, Eagle's Perch, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 164,
            "name": "Jason Phillips",
            "email": "jason.phillips@example.com",
            "password": "anotherP@ssw0rd!",
            "address": "888 Citrine Dr, Falcon's Point, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 165,
            "name": "Margaret Campbell",
            "email": "margaret.campbell@example.com",
            "password": "P@ssw0rdA1B2C",
            "address": "999 Diamond Ct, Hawk's Roost, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 166,
            "name": "Samuel Parker",
            "email": "samuel.parker@example.com",
            "password": "secure!P@ssw0rd1",
            "address": "111 Emerald Rd, Vulture Valley, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 167,
            "name": "Lisa Evans",
            "email": "lisa.evans@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "222 Garnet St, Condor Creek, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 168,
            "name": "Brian Collins",
            "email": "brian.collins@example.com",
            "password": "P@ssw0rdTestSecure",
            "address": "333 Jasper Ave, Buzzard's Nest, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Camera"
        },
        {
            "id": 169,
            "name": "Deborah Stewart",
            "email": "deborah.stewart@example.com",
            "password": "secureP@ssw0rd!4",
            "address": "444 Opal Ln, Osprey Point, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Printer"
        },
        {
            "id": 170,
            "name": "Stephen Morris",
            "email": "stephen.morris@example.com",
            "password": "P@ssw0rd!test2",
            "address": "555 Peridot Dr, Kite's Crossing, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 171,
            "name": "Helen Rogers",
            "email": "helen.rogers@example.com",
            "password": "testP@ssw0rdSecure!",
            "address": "666 Quartz Ct, Harrier Heights, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 172,
            "name": "Jeffrey Reed",
            "email": "jeffrey.reed@example.com",
            "password": "anotherP@ssw0rd6",
            "address": "777 Ruby Rd, Goshawk Grove, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 173,
            "name": "Amy Bell",
            "email": "amy.bell@example.com",
            "password": "P@ssw0rdA1b2c",
            "address": "888 Sapphire St, Finch Field, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 174,
            "name": "Scott Ward",
            "email": "scott.ward@example.com",
            "password": "secure!P@ssw0rd",
            "address": "999 Topaz Ave, Robin's Wood, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 175,
            "name": "Kimberly Foster",
            "email": "kimberly.foster@example.com",
            "password": "mySecureP@ssw0rd6",
            "address": "111 Zircon Ln, Sparrow's Nest, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Router"
        },
        {
            "id": 176,
            "name": "Patrick Ross",
            "email": "patrick.ross@example.com",
            "password": "P@ssw0rdTest1",
            "address": "222 Amethyst Dr, Bluebird Brook, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 177,
            "name": "Angela Cox",
            "email": "angela.cox@example.com",
            "password": "secureP@ssw0rd!7",
            "address": "333 Beryl Ct, Goldfinch Glen, USA",
            "purchaseCount": 4,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 178,
            "name": "Frank Peterson",
            "email": "frank.peterson@example.com",
            "password": "test!P@ssw0rdC",
            "address": "444 Citrine Rd, Jaybird Junction, USA",
            "purchaseCount": 12,
            "maximumProductBought": "SSD"
        },
        {
            "id": 179,
            "name": "Brenda Kelly",
            "email": "brenda.kelly@example.com",
            "password": "P@ssw0rdSecure1",
            "address": "555 Diamond St, Magpie Meadow, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 180,
            "name": "Eric Carter",
            "email": "eric.carter@example.com",
            "password": "myP@ssw0rdTest",
            "address": "666 Emerald Ave, Cardinal Creek, USA",
            "purchaseCount": 9,
            "maximumProductBought": "RAM"
        },
        {
            "id": 181,
            "name": "Catherine Powell",
            "email": "catherine.powell@example.com",
            "password": "secureP@ssw0rd!test4",
            "address": "777 Garnet Ln, Robin Ridge, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Processor"
        },
        {
            "id": 182,
            "name": "Gregory Ross",
            "email": "gregory.ross@example.com",
            "password": "P@ssw0rdA1b2c3",
            "address": "888 Jasper Dr, Eagle's Perch, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 183,
            "name": "Diana Sanchez",
            "email": "diana.sanchez@example.com",
            "password": "secure!P@ssw0rd!",
            "address": "999 Opal Ct, Falcon's Point, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 184,
            "name": "Raymond King",
            "email": "raymond.king@example.com",
            "password": "testP@ssw0rdSecure",
            "address": "111 Peridot Rd, Hawk's Roost, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Case"
        },
        {
            "id": 185,
            "name": "Marie Scott",
            "email": "marie.scott@example.com",
            "password": "password!456",
            "address": "222 Quartz St, Vulture Valley, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Fan"
        },
        {
            "id": 186,
            "name": "Jeremy Baker",
            "email": "jeremy.baker@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "333 Ruby Ave, Condor Creek, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 187,
            "name": "Kathryn Green",
            "email": "kathryn.green@example.com",
            "password": "P@ssw0rdTest!",
            "address": "444 Sapphire Ln, Buzzard's Nest, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 188,
            "name": "Walter Hill",
            "email": "walter.hill@example.com",
            "password": "secureP@ssw0rd123!",
            "address": "555 Topaz Dr, Osprey Point, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 189,
            "name": "Virginia Adams",
            "email": "virginia.adams@example.com",
            "password": "test!P@ssw0rd",
            "address": "666 Zircon Ct, Kite's Crossing, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 190,
            "name": "Gerald Wright",
            "email": "gerald.wright@example.com",
            "password": "anotherP@ssw0rd!",
            "address": "777 Amethyst Rd, Harrier Heights, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 191,
            "name": "Pamela Evans",
            "email": "pamela.evans@example.com",
            "password": "P@ssw0rdA1B2C",
            "address": "888 Beryl St, Goshawk Grove, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 192,
            "name": "Dennis Turner",
            "email": "dennis.turner@example.com",
            "password": "secure!P@ssw0rd1",
            "address": "999 Citrine Ave, Finch Field, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 193,
            "name": "Joan Collins",
            "email": "joan.collins@example.com",
            "password": "mySecureP@ssw0rd7",
            "address": "111 Diamond Ln, Robin's Wood, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 194,
            "name": "Jerry Baker",
            "email": "jerry.baker@example.com",
            "password": "P@ssw0rdTestSecure",
            "address": "222 Emerald Dr, Sparrow's Nest, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 195,
            "name": "Judith Hall",
            "email": "judith.hall@example.com",
            "password": "secureP@ssw0rd!4",
            "address": "333 Garnet Ct, Bluebird Brook, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Camera"
        },
        {
            "id": 196,
            "name": "Henry Wright",
            "email": "henry.wright@example.com",
            "password": "P@ssw0rd!test2",
            "address": "444 Jasper Rd, Goldfinch Glen, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Printer"
        },
        {
            "id": 197,
            "name": "Cheryl Miller",
            "email": "cheryl.miller@example.com",
            "password": "testP@ssw0rdSecure!",
            "address": "555 Opal St, Jaybird Junction, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 198,
            "name": "Peter Clark",
            "email": "peter.clark@example.com",
            "password": "anotherP@ssw0rd8",
            "address": "666 Peridot Ave, Magpie Meadow, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 199,
            "name": "Andrea Lopez",
            "email": "andrea.lopez@example.com",
            "password": "P@ssw0rdA1b2c",
            "address": "777 Quartz Ln, Cardinal Creek, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 200,
            "name": "Phillip Scott",
            "email": "phillip.scott@example.com",
            "password": "secure!P@ssw0rd",
            "address": "888 Ruby Dr, Robin Ridge, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 201,
            "name": "Christina White",
            "email": "christina.white@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "999 Sapphire Ct, Eagle's Perch, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 202,
            "name": "Ralph Allen",
            "email": "ralph.allen@example.com",
            "password": "P@ssw0rdTest12",
            "address": "111 Topaz Rd, Falcon's Point, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Router"
        },
        {
            "id": 203,
            "name": "Denise Turner",
            "email": "denise.turner@example.com",
            "password": "secureP@ssw0rd!5",
            "address": "222 Zircon St, Hawk's Roost, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 204,
            "name": "Lawrence Hall",
            "email": "lawrence.hall@example.com",
            "password": "test!P@ssw0rdD",
            "address": "333 Amethyst Ave, Vulture Valley, USA",
            "purchaseCount": 9,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 205,
            "name": "Judith Martin",
            "email": "judith.martin@example.com",
            "password": "P@ssw0rdSecure1",
            "address": "444 Beryl Ln, Condor Creek, USA",
            "purchaseCount": 2,
            "maximumProductBought": "SSD"
        },
        {
            "id": 206,
            "name": "William Jackson",
            "email": "william.jackson@example.com",
            "password": "myP@ssw0rdTest",
            "address": "555 Citrine Dr, Buzzard's Nest, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 207,
            "name": "Teresa Garcia",
            "email": "teresa.garcia@example.com",
            "password": "secureP@ssw0rd!test5",
            "address": "666 Diamond Ct, Osprey Point, USA",
            "purchaseCount": 13,
            "maximumProductBought": "RAM"
        },
        {
            "id": 208,
            "name": "Roy Evans",
            "email": "roy.evans@example.com",
            "password": "P@ssw0rdA1b2c3",
            "address": "777 Emerald Rd, Kite's Crossing, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Processor"
        },
        {
            "id": 209,
            "name": "Nicole Wilson",
            "email": "nicole.wilson@example.com",
            "password": "secure!P@ssw0rd!",
            "address": "888 Garnet St, Harrier Heights, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 210,
            "name": "Jesse Moore",
            "email": "jesse.moore@example.com",
            "password": "testP@ssw0rdSecure",
            "address": "999 Jasper Ave, Goshawk Grove, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 211,
            "name": "Alice Thompson",
            "email": "alice.thompson@example.com",
            "password": "password!567",
            "address": "111 Opal Ln, Finch Field, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Case"
        },
        {
            "id": 212,
            "name": "Aaron White",
            "email": "aaron.white@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "222 Peridot Dr, Robin's Wood, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Fan"
        },
        {
            "id": 213,
            "name": "Julie Garcia",
            "email": "julie.garcia@example.com",
            "password": "P@ssw0rdTest!",
            "address": "333 Quartz Ct, Sparrow's Nest, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 214,
            "name": "Joe Hall",
            "email": "joe.hall@example.com",
            "password": "secureP@ssw0rd123!",
            "address": "444 Ruby Rd, Bluebird Brook, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 215,
            "name": "Christine Hernandez",
            "email": "christine.hernandez@example.com",
            "password": "test!P@ssw0rd",
            "address": "555 Sapphire St, Goldfinch Glen, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 216,
            "name": "Arthur Robinson",
            "email": "arthur.robinson@example.com",
            "password": "anotherP@ssw0rd!",
            "address": "666 Topaz Ave, Jaybird Junction, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 217,
            "name": "Sharon Scott",
            "email": "sharon.scott@example.com",
            "password": "P@ssw0rdA1B2C",
            "address": "777 Zircon Ln, Magpie Meadow, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 218,
            "name": "Roger Lopez",
            "email": "roger.lopez@example.com",
            "password": "secure!P@ssw0rd1",
            "address": "888 Amethyst Dr, Cardinal Creek, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 219,
            "name": "Cynthia Davis",
            "email": "cynthia.davis@example.com",
            "password": "mySecureP@ssw0rd8",
            "address": "999 Beryl Ct, Robin Ridge, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 220,
            "name": "Jose Wilson",
            "email": "jose.wilson@example.com",
            "password": "P@ssw0rdTestSecure",
            "address": "111 Citrine Rd, Eagle's Perch, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 221,
            "name": "Maria Hernandez",
            "email": "maria.hernandez@example.com",
            "password": "secureP@ssw0rd!4",
            "address": "222 Diamond St, Falcon's Point, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 222,
            "name": "Michael Martinez",
            "email": "michael.martinez@example.com",
            "password": "P@ssw0rd!test2",
            "address": "333 Emerald Ave, Hawk's Roost, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Camera"
        },
        {
            "id": 223,
            "name": "Katherine Miller",
            "email": "katherine.miller@example.com",
            "password": "testP@ssw0rdSecure!",
            "address": "444 Garnet Ln, Vulture Valley, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Printer"
        },
        {
            "id": 224,
            "name": "Frank White",
            "email": "frank.white@example.com",
            "password": "anotherP@ssw0rd9",
            "address": "555 Jasper Dr, Condor Creek, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 225,
            "name": "Shirley Davis",
            "email": "shirley.davis@example.com",
            "password": "P@ssw0rdA1b2c",
            "address": "666 Opal Ct, Buzzard's Nest, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 226,
            "name": "Larry Moore",
            "email": "larry.moore@example.com",
            "password": "secure!P@ssw0rd",
            "address": "777 Peridot Rd, Osprey Point, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 227,
            "name": "Pamela Wilson",
            "email": "pamela.wilson@example.com",
            "password": "mySecureP@ssw0rd9",
            "address": "888 Quartz St, Kite's Crossing, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 228,
            "name": "Henry Taylor",
            "email": "henry.taylor@example.com",
            "password": "P@ssw0rdTest12",
            "address": "999 Ruby Ave, Harrier Heights, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 229,
            "name": "Laura Anderson",
            "email": "laura.anderson@example.com",
            "password": "secureP@ssw0rd!8",
            "address": "111 Sapphire Ln, Goshawk Grove, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Router"
        },
        {
            "id": 230,
            "name": "Bruce Thomas",
            "email": "bruce.thomas@example.com",
            "password": "test!P@ssw0rdE",
            "address": "222 Topaz Dr, Finch Field, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 231,
            "name": "Joyce Martinez",
            "email": "joyce.martinez@example.com",
            "password": "P@ssw0rdSecure1",
            "address": "333 Zircon Ct, Robin's Wood, USA",
            "purchaseCount": 13,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 232,
            "name": "Douglas Johnson",
            "email": "douglas.johnson@example.com",
            "password": "myP@ssw0rdTest",
            "address": "444 Amethyst Rd, Sparrow's Nest, USA",
            "purchaseCount": 5,
            "maximumProductBought": "SSD"
        },
        {
            "id": 233,
            "name": "Deborah Wright",
            "email": "deborah.wright@example.com",
            "password": "secureP@ssw0rd!test6",
            "address": "555 Beryl St, Bluebird Brook, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 234,
            "name": "Russell White",
            "email": "russell.white@example.com",
            "password": "P@ssw0rdA1b2c3",
            "address": "666 Citrine Ave, Goldfinch Glen, USA",
            "purchaseCount": 3,
            "maximumProductBought": "RAM"
        },
        {
            "id": 235,
            "name": "Sharon Wilson",
            "email": "sharon.wilson@example.com",
            "password": "secure!P@ssw0rd!",
            "address": "777 Diamond Ln, Jaybird Junction, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Processor"
        },
        {
            "id": 236,
            "name": "Timothy Evans",
            "email": "timothy.evans@example.com",
            "password": "testP@ssw0rdSecure",
            "address": "888 Emerald Dr, Magpie Meadow, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 237,
            "name": "Carolyn King",
            "email": "carolyn.king@example.com",
            "password": "password!678",
            "address": "999 Garnet Ct, Cardinal Creek, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 238,
            "name": "Craig Collins",
            "email": "craig.collins@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "111 Jasper Rd, Robin Ridge, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Case"
        },
        {
            "id": 239,
            "name": "Debra Scott",
            "email": "debra.scott@example.com",
            "password": "P@ssw0rdTest!",
            "address": "222 Opal St, Eagle's Perch, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Fan"
        },
        {
            "id": 240,
            "name": "Gary Green",
            "email": "gary.green@example.com",
            "password": "secureP@ssw0rd123!",
            "address": "333 Peridot Ave, Falcon's Point, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 241,
            "name": "Helen Young",
            "email": "helen.young@example.com",
            "password": "test!P@ssw0rd",
            "address": "444 Quartz Ln, Hawk's Roost, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 242,
            "name": "Terry Adams",
            "email": "terry.adams@example.com",
            "password": "anotherP@ssw0rd!",
            "address": "555 Ruby Dr, Vulture Valley, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 243,
            "name": "Rebecca Parker",
            "email": "rebecca.parker@example.com",
            "password": "P@ssw0rdA1B2C",
            "address": "666 Sapphire Ct, Condor Creek, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 244,
            "name": "Phillip Turner",
            "email": "phillip.turner@example.com",
            "password": "secure!P@ssw0rd1",
            "address": "777 Topaz Rd, Buzzard's Nest, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 245,
            "name": "Dorothy Lewis",
            "email": "dorothy.lewis@example.com",
            "password": "mySecureP@ssw0rd0",
            "address": "888 Zircon St, Osprey Point, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 246,
            "name": "Wayne Mitchell",
            "email": "wayne.mitchell@example.com",
            "password": "P@ssw0rdTestSecure",
            "address": "999 Amethyst Ave, Kite's Crossing, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 247,
            "name": "Rose Evans",
            "email": "rose.evans@example.com",
            "password": "secureP@ssw0rd!4",
            "address": "111 Beryl Ln, Harrier Heights, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 248,
            "name": "Frank White",
            "email": "frank.white@example.com",
            "password": "P@ssw0rd!test2",
            "address": "222 Citrine Dr, Goshawk Grove, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 249,
            "name": "Evelyn Hall",
            "email": "evelyn.hall@example.com",
            "password": "testP@ssw0rdSecure!",
            "address": "333 Diamond Ct, Finch Field, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Camera"
        },
        {
            "id": 250,
            "name": "Dennis Turner",
            "email": "dennis.turner@example.com",
            "password": "anotherP@ssw0rd10",
            "address": "444 Emerald Rd, Robin's Wood, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Printer"
        },
        {
            "id": 251,
            "name": "Frances Rodriguez",
            "email": "frances.rodriguez@example.com",
            "password": "P@ssw0rdA1b2c",
            "address": "555 Garnet St, Sparrow's Nest, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 252,
            "name": "Willie Martinez",
            "email": "willie.martinez@example.com",
            "password": "secure!P@ssw0rd",
            "address": "666 Jasper Ave, Bluebird Brook, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 253,
            "name": "Paula Thompson",
            "email": "paula.thompson@example.com",
            "password": "mySecureP@ssw0rd1",
            "address": "777 Opal Ln, Goldfinch Glen, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 254,
            "name": "Joe Hall",
            "email": "joe.hall@example.com",
            "password": "P@ssw0rdTest12",
            "address": "888 Peridot Dr, Jaybird Junction, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 255,
            "name": "Nancy Green",
            "email": "nancy.green@example.com",
            "password": "secureP@ssw0rd!8",
            "address": "999 Quartz Ct, Magpie Meadow, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 256,
            "name": "Phillip Wilson",
            "email": "phillip.wilson@example.com",
            "password": "test!P@ssw0rdF",
            "address": "111 Ruby Rd, Cardinal Creek, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Router"
        },
        {
            "id": 257,
            "name": "Anna Davis",
            "email": "anna.davis@example.com",
            "password": "P@ssw0rdSecure1",
            "address": "222 Sapphire St, Robin Ridge, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 258,
            "name": "Walter Young",
            "email": "walter.young@example.com",
            "password": "myP@ssw0rdTest",
            "address": "333 Topaz Ave, Eagle's Perch, USA",
            "purchaseCount": 3,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 259,
            "name": "Jennifer Turner",
            "email": "jennifer.turner@example.com",
            "password": "secureP@ssw0rd!test7",
            "address": "444 Zircon Ln, Falcon's Point, USA",
            "purchaseCount": 10,
            "maximumProductBought": "SSD"
        },
        {
            "id": 260,
            "name": "Benjamin Moore",
            "email": "benjamin.moore@example.com",
            "password": "P@ssw0rdA1b2c3",
            "address": "555 Amethyst Dr, Hawk's Roost, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 261,
            "name": "Judith Garcia",
            "email": "judith.garcia@example.com",
            "password": "secure!P@ssw0rd!",
            "address": "666 Beryl Ct, Vulture Valley, USA",
            "purchaseCount": 4,
            "maximumProductBought": "RAM"
        },
        {
            "id": 262,
            "name": "Jeffrey Scott",
            "email": "jeffrey.scott@example.com",
            "password": "testP@ssw0rdSecure",
            "address": "777 Citrine Rd, Condor Creek, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Processor"
        },
        {
            "id": 263,
            "name": "Brenda King",
            "email": "brenda.king@example.com",
            "password": "password!789",
            "address": "888 Diamond St, Buzzard's Nest, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 264,
            "name": "Robert Evans",
            "email": "robert.evans@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "999 Emerald Ave, Osprey Point, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 265,
            "name": "Carol Adams",
            "email": "carol.adams@example.com",
            "password": "P@ssw0rdTest!",
            "address": "111 Garnet Ln, Kite's Crossing, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Case"
        },
        {
            "id": 266,
            "name": "Ronald Wilson",
            "email": "ronald.wilson@example.com",
            "password": "secureP@ssw0rd123!",
            "address": "222 Jasper Dr, Harrier Heights, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Fan"
        },
        {
            "id": 267,
            "name": "Shirley Miller",
            "email": "shirley.miller@example.com",
            "password": "test!P@ssw0rd",
            "address": "333 Opal Ct, Goshawk Grove, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 268,
            "name": "Gregory Davis",
            "email": "gregory.davis@example.com",
            "password": "anotherP@ssw0rd!",
            "address": "444 Peridot Rd, Finch Field, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 269,
            "name": "Teresa White",
            "email": "teresa.white@example.com",
            "password": "P@ssw0rdA1B2C",
            "address": "555 Quartz St, Robin's Wood, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 270,
            "name": "Patrick Harris",
            "email": "patrick.harris@example.com",
            "password": "secure!P@ssw0rd1",
            "address": "666 Ruby Ave, Sparrow's Nest, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 271,
            "name": "Debra Allen",
            "email": "debra.allen@example.com",
            "password": "mySecureP@ssw0rd2",
            "address": "777 Sapphire Ln, Bluebird Brook, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Headphones"
        },
        {
            "id": 272,
            "name": "Joseph Evans",
            "email": "joseph.evans@example.com",
            "password": "P@ssw0rdTestSecure",
            "address": "888 Topaz Dr, Goldfinch Glen, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Laptop"
        },
        {
            "id": 273,
            "name": "Sandra Martin",
            "email": "sandra.martin@example.com",
            "password": "secureP@ssw0rd!4",
            "address": "999 Zircon Ct, Jaybird Junction, USA",
            "purchaseCount": 4,
            "maximumProductBought": "Smartphone"
        },
        {
            "id": 274,
            "name": "Thomas Turner",
            "email": "thomas.turner@example.com",
            "password": "P@ssw0rd!test2",
            "address": "111 Amethyst Rd, Magpie Meadow, USA",
            "purchaseCount": 12,
            "maximumProductBought": "Tablet"
        },
        {
            "id": 275,
            "name": "Brenda Jackson",
            "email": "brenda.jackson@example.com",
            "password": "testP@ssw0rdSecure!",
            "address": "222 Beryl St, Cardinal Creek, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Smartwatch"
        },
        {
            "id": 276,
            "name": "Daniel Davis",
            "email": "daniel.davis@example.com",
            "password": "anotherP@ssw0rd11",
            "address": "333 Citrine Ave, Robin Ridge, USA",
            "purchaseCount": 9,
            "maximumProductBought": "Camera"
        },
        {
            "id": 277,
            "name": "Cynthia Wilson",
            "email": "cynthia.wilson@example.com",
            "password": "P@ssw0rdA1b2c",
            "address": "444 Diamond Ln, Eagle's Perch, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Printer"
        },
        {
            "id": 278,
            "name": "George Evans",
            "email": "george.evans@example.com",
            "password": "secure!P@ssw0rd",
            "address": "555 Emerald Dr, Falcon's Point, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Monitor"
        },
        {
            "id": 279,
            "name": "Mary King",
            "email": "mary.king@example.com",
            "password": "mySecureP@ssw0rd3",
            "address": "666 Garnet Ct, Hawk's Roost, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Keyboard"
        },
        {
            "id": 280,
            "name": "Steven Wright",
            "email": "steven.wright@example.com",
            "password": "P@ssw0rdTest12",
            "address": "777 Jasper Rd, Vulture Valley, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Mouse"
        },
        {
            "id": 281,
            "name": "Betty Davis",
            "email": "betty.davis@example.com",
            "password": "secureP@ssw0rd!8",
            "address": "888 Opal St, Condor Creek, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Webcam"
        },
        {
            "id": 282,
            "name": "Donald Hall",
            "email": "donald.hall@example.com",
            "password": "test!P@ssw0rdG",
            "address": "999 Peridot Ave, Buzzard's Nest, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Speaker"
        },
        {
            "id": 283,
            "name": "Ashley Wilson",
            "email": "ashley.wilson@example.com",
            "password": "P@ssw0rdSecure1",
            "address": "111 Quartz Ln, Osprey Point, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Router"
        },
        {
            "id": 284,
            "name": "Mark Miller",
            "email": "mark.miller@example.com",
            "password": "myP@ssw0rdTest",
            "address": "222 Ruby Dr, Kite's Crossing, USA",
            "purchaseCount": 7,
            "maximumProductBought": "Microphone"
        },
        {
            "id": 285,
            "name": "Karen Evans",
            "email": "karen.evans@example.com",
            "password": "secureP@ssw0rd!test8",
            "address": "333 Sapphire Ct, Harrier Heights, USA",
            "purchaseCount": 4,
            "maximumProductBought": "External Hard Drive"
        },
        {
            "id": 286,
            "name": "Steven Turner",
            "email": "steven.turner@example.com",
            "password": "P@ssw0rdA1b2c3",
            "address": "444 Topaz Rd, Goshawk Grove, USA",
            "purchaseCount": 12,
            "maximumProductBought": "SSD"
        },
        {
            "id": 287,
            "name": "Donna Scott",
            "email": "donna.scott@example.com",
            "password": "secure!P@ssw0rd!",
            "address": "555 Zircon St, Finch Field, USA",
            "purchaseCount": 6,
            "maximumProductBought": "Graphics Card"
        },
        {
            "id": 288,
            "name": "Paul Green",
            "email": "paul.green@example.com",
            "password": "testP@ssw0rdSecure",
            "address": "666 Amethyst Ave, Robin's Wood, USA",
            "purchaseCount": 9,
            "maximumProductBought": "RAM"
        },
        {
            "id": 289,
            "name": "Carol Adams",
            "email": "carol.adams@example.com",
            "password": "password!890",
            "address": "777 Beryl Ln, Sparrow's Nest, USA",
            "purchaseCount": 2,
            "maximumProductBought": "Processor"
        },
        {
            "id": 290,
            "name": "George Baker",
            "email": "george.baker@example.com",
            "password": "mySecureP@ssw0rd",
            "address": "888 Citrine Dr, Bluebird Brook, USA",
            "purchaseCount": 11,
            "maximumProductBought": "Motherboard"
        },
        {
            "id": 291,
            "name": "Michelle Mitchell",
            "email": "michelle.mitchell@example.com",
            "password": "P@ssw0rdTest!",
            "address": "999 Diamond Ct, Goldfinch Glen, USA",
            "purchaseCount": 13,
            "maximumProductBought": "Power Supply"
        },
        {
            "id": 292,
            "name": "Edward Roberts",
            "email": "edward.roberts@example.com",
            "password": "secureP@ssw0rd123!",
            "address": "111 Emerald Rd, Jaybird Junction, USA",
            "purchaseCount": 5,
            "maximumProductBought": "Case"
        },
        {
            "id": 293,
            "name": "Sarah Turner",
            "email": "sarah.turner@example.com",
            "password": "test!P@ssw0rd",
            "address": "222 Garnet St, Magpie Meadow, USA",
            "purchaseCount": 8,
            "maximumProductBought": "Fan"
        },
        {
            "id": 294,
            "name": "Jason Phillips",
            "email": "jason.phillips@example.com",
            "password": "anotherP@ssw0rd!",
            "address": "333 Jasper Ave, Cardinal Creek, USA",
            "purchaseCount": 3,
            "maximumProductBought": "Cooler"
        },
        {
            "id": 295,
            "name": "Margaret Campbell",
            "email": "margaret.campbell@example.com",
            "password": "P@ssw0rdA1B2C",
            "address": "444 Opal Ln, Robin Ridge, USA",
            "purchaseCount": 10,
            "maximumProductBought": "Keyboard"
        }
    ];
}