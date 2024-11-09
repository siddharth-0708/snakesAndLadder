//CALLBACK HELL
function getPlayerCountry(name, resultFunction){
    fetchPlayerCountry("markram", (data, error)=>{
        if(error){
            resultFunction("error came");
            return;
        }
        fetchProfileData(data, (profile, error)=>{
            if(error){
                resultFunction("error came");
                return;
            }
            fetchDOBdata(profile, (dob, error)=>{
                if(error){
                    resultFunction("error came");
                    return;
                }
                console.log(dob); 
            })
        })
    });
}

let fetchPlayerCountry = function(playerName, callback) {
    setTimeout(() => {
        callback("south Africa");
    }, 1000); 
}
let fetchProfileData = function(countryName, callback) {
    setTimeout(() => {
        callback({name: 'markram', dob:'22-9-1998'});
    }, 1000); 
}
let fetchDOBdata = function(profileData = {name: 'markram', dob:'22-9-1998'}, callback) {
    setTimeout(() => {
        callback(profileData.dob);
    }, 1000); 
}
getPlayerCountry('markram', (error)=>{
    console.log(error);
})

// function getPlayerCountryPromise(name){
//     return new Promise((resolve, error)=>{
//         return
//     })
// }
//PROMISES
let fetchPlayerCountryPromise = function(playerName) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("south Africa");
        }, 10000); 
    })
}
let fetchProfileDataPromise = function(countryName) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({name: 'markram', dob:'22-9-1998'});
        }, 6000); 
    })
}
let fetchDOBdataPromise = function(profileData = {name: 'markram', dob:'22-9-1998'}) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(profileData.dob);
        }, 2000); 
    })
}
fetchPlayerCountryPromise('markram').then((data)=> fetchProfileDataPromise(data)).then((data)=> fetchDOBdataPromise()).then((data)=>{
    console.log("This is promise data ", data);
}).catch(error => {
    console.log("promise error came", error);
})

let dataPromise = [fetchPlayerCountryPromise(), fetchProfileDataPromise(), fetchDOBdataPromise()];

Promise.all(dataPromise).then((data)=> {
    console.log("All promises data  ", data);
})