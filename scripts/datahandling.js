class dataHandler{

    constructor(){
        this.tableRowCounter = 1;

        this.terranUnits = {
            'scv': 'SCV',
            'banshee': "Banshee",
            'battlecruiser': 'Battle Cruiser',
            'cyclone': 'Cyclone',
            'ghost': 'Ghost',
            'hellbat': 'Hellbat',
            'hellion': 'Hellion',
            'liberator': 'Liberator',
            'marauder': 'Marauder',
            'marine': 'Marine',
            'medivac': 'Medivac',
            'mule': 'Mule',
            'raven': 'Raven',
            'reaper': 'Reaper',
            'siegetank': 'Siege Tank',
            'thor': 'Thor',
            'viking': 'Viking',
            'widowmine': 'Widow Mine'
        }

        this.terranBuildings = {
            'armory': 'Armory',
            'barracks': 'Barracks',
            'bunker': 'Bunker', 
            'commandcenter': 'Command Center',
            'engineeringbay': 'Engineering Bay',
            'factory': 'Factory',
            'fusioncore': 'Fusion Core',
            'ghostacademy': 'Ghost Academy',
            'missleturret': 'Missile Turret',
            'orbitalcommand': 'Orbital Command',
            'reactor': 'Reactor',
            'refinery': 'Refinery',
            'sensortower': 'Sensor Tower',
            'starport': 'Star Port',
            'supplydepot': 'Supply Depot', 
            'techlab': 'Tech Lab',
            'planetaryfortress': 'Planetary Fortress'
        }
        
        this.terranUpgrades = {
            'researchcombatshield': 'Combat Shield',
            'researchinfernalpreigniter': 'Infernal Pre-Igniter',
            'researchstimpack': 'Stimpack',
            'researchcyclonelockondamageupgrade': 'Mag-Field Accelerator',
            'researchcloakingfield': 'Cloaking Field',
            'upgradevehicleweapons1': 'Vehicle Weapons +1',
            'researchdrillingclaws': 'Drilling Claws',
            'researchsmartservos': 'Smart Servos',
            'researchcorvidreactor': 'Corvid Reactor',
            'researchconcussiveshells': 'Concussive Shells',
            'researchterranvehicleandshiparmorslevel1': 'Vehicle and Ship Armor +1',
            'upgradeterraninfantryweapons1': 'Infantry Weapons +1',
            'upgradeterraninfantryarmor1': 'Infantry Armor +1',
            'upgradevehicleweapons2': 'Vehicle Weapons 2', 
            'researchbansheespeed': 'Hyperflight Rotors',
            'researchpersonalcloaking': 'Personal Cloaking',
            'researchmedivacincreasespeedboost': 'Rapid Reignition System',
            'researchweaponrefit': 'Weapon Refit',
            'researchbehemothreactor': 'Behemoth Reactor',
            'researchenhancedshockwaves': 'Enhanced Shockwaves',
            'upgradeterraninfantryweapons2': 'Infantry Weapons +2',
            'upgradeterraninfantryarmor2': 'Infantry Armor +2',
            'researchhisecautotracking': 'Hi-Sec Auto Tracking',
            'upgradestructurearmor': 'Neosteel Armor',
            'researchterranvehicleandshiparmorslevel2': 'Vehicle and Ship Armor +2',
            'upgradeshipweapons1': 'Ship Weapons +1',
            'upgradevehicleweapons3': 'Vehicle Weapons +3',
            'upgradeterraninfantryweapons3': 'Infantry Weapons +3',
            'upgradeterraninfantryarmor3': 'Infantry Armor +3',
            'upgradeshipweapons2': 'Ship Weapons +2',
            'researchterranvehicleandshiparmorslevel3': 'Vehicle and Ship Armos +3',
            'upgradeshipweapons3': 'Ship Weapons +3'
        }

        this.protossUpgrades = {
            'upgradeairweapons1': 'Air Weapons +1',
            'upgradegroundweapons1': 'Ground Weapons +1',
            'upgradegroundarmor1': 'Ground Armor +1',
            'researchcharge': 'Charge',
            'upgradeairarmor1': 'Air Armor +1',
            'upgradegroundweapons2': 'Ground Weapons +2',
            'upgradegroundarmor2': 'Ground Armor +2',
            'researchpsistormtech': 'Psi Storm',
            'researchblink': 'Blink',
            'researchdarktemplarblinkupgrade': 'Dark Templar Blink',
            'researchwarpgate': 'Warp Gate',
            'researchadeptpiercingattack': 'Piercing Attacks',
            'researchextendedthermallance': 'Thermal Lance',
            'upgradegroundweapons3': 'Ground Weapons +3',
            'upgradegroundarmor3': 'Ground Armor +3',
            'researchanionpulsecrystals': 'Anion Pulse Crystals',
            'researchbosoniccore': 'Bosonic Core',
            'researchgravitysling': 'Gravity Sling',
            'upgradeshields1': 'Shields +1',
            'researchgraviticdrive': 'Gravitic Drive',
            'researchgraviticboosters': 'Gravitic boosters',
            'upgradeairweapons2': 'Air Weapons +2',
            'upgradeairarmor2': 'Air Armor +2',
            'upgradeshileds2': 'Shields +2',
            'upgradeairweapons3': 'Air Weapons +3',
            'upgradeairarmor3': 'Air Armor +3',
            'upgradeshileds3': 'Shields +3'
        }

        this.protossUnits = {
            'probe': 'Probe',
            'zealot': 'Zealot',
            'sentry': 'Sentry',
            'stalker': 'Stlaker',
            'adept': 'Adept',
            'hightemplar': 'High Templar',
            'darktemplar': 'Dark Templar',
            'archon': 'Arhcon',
            'observer': 'Observer',
            'warpprism': 'Warp Prism',
            'immortal': 'Immortal',
            'colossus': 'Colossus',
            'disruptor': 'Disruptor',
            'phoenix': 'Phoenix',
            'voidray': 'Void Ray',
            'oracle': 'Oracle',
            'tempest': 'Tempest',
            'carrier': 'Carrier',
            'interceptor': 'Interceptor',
            'mothership': 'Mothership'
        }

        this.protossBuildings = {
            'nexus': 'Nexus',
            'pylon': 'Pylon',
            'assimilator': 'Assimilator',
            'gateway': 'Gateway',
            'forge': 'Forge',
            'photoncannon': 'Photon Cannon',
            'shieldbattery': 'Shield Battery',
            'warpgate': 'Warp Gate',
            'cyberneticscore': 'Cybernetics Core',
            'twilightcouncil': 'Twilight Council',
            'roboticsfacility': 'Robotics Facility',
            'stargate': 'Stargate',
            'templararchives': 'Templar Archives',
            'darkshrine': 'Dark Shrine',
            'roboticsbay': 'Robotics Bay',
            'fleetbeacon': 'Fleet Beacon'
        }
    }

    // A simple checker to see if the production is a valid input
    typeChecker = (parsedProduction) => {

        if (Object.keys(this.terranUnits).includes(parsedProduction)){
            return 'units';
        } if (Object.keys(this.terranBuildings).includes(parsedProduction)){
            return 'buildings';
        } if (Object.keys(this.terranUpgrades).includes(parsedProduction)){
            return 'upgrades'
        } else {
            return false;
        }
    }

    isJson = (importedData) => {
        try {
            JSON.parse(importedData);
        } catch (e) {
            return false;
        }
        return true;
    }

    getDisplayName = (type, parsedProduction) =>{

        let displayName;

        switch(type){
            case 'units':
                displayName = this.terranUnits[parsedProduction]                
                break;
            case 'buildings':
                displayName = this.terranBuildings[parsedProduction]
                break;
            case 'upgrades':
                displayName = this.terranUpgrades[parsedProduction]
                break;
        }

        return displayName
    }

    addTableData(parsedProduction, minutes, seconds, supply) {

        let formValues = [parsedProduction, minutes, seconds, supply]
   
        if (formValues.every(value => value !== "") && this.typeChecker(parsedProduction)){

            let time = `${minutes}:${seconds}`;
            let tableRow = document.createElement('tr');

            // Counter to be able to access this data by it's class. 
            tableRow.id = `tableRow-${this.tableRowCounter + 1}`;

            let productionData = document.createElement('td');

            let productionType = this.typeChecker(parsedProduction)

            // Giving the table Data a display name, and then adding the parsed production as a value for later use. 

            productionData.innerHTML =  this.getDisplayName(productionType, parsedProduction);     
            productionData.value = parsedProduction;       
            productionData.classList.add('production');

            let supplyData = document.createElement('td');
            supplyData.innerHTML = supply;
            supplyData.classList.add('supply');

            let timeData = document.createElement('td');
            timeData.innerHTML = time;
            timeData.classList.add('time');

            let deleteButton = document.createElement('td');
            let deleteLink = document.createElement('a');        
            deleteLink.href="#";
            deleteLink.innerHTML = "x"
            deleteLink.classList.add('deleteButton');

            deleteButton.append(deleteLink);

            // Creating an array of elements to iterate over + appending to new row

            let createdElements = [productionData, supplyData, timeData, deleteButton];
           
            createdElements.forEach((data) => tableRow.append(data));

            // appending new row to table

            createdElements.forEach((data) => tableRow.append(data));
            document.getElementById('buildOrderBody').append(tableRow);            
            
        } else {
            console.log('There is a problem with the data');
        }
    }

    fromJson = (data) =>{

        let confirmation = confirm('This action will overwrite any data already on the table, do you want to proceed?');
        // Getting the player 1 data
        
        if (confirmation){

            this.clearTable();
            let build1 = data['build'];
    
            for(let x in build1){
                
                let production = build1[x][0];
                let minutes = Math.floor(build1[x][1] / 60);
                let seconds = build1[x][1] % 60;
                let supply = build1[x][2];
                
                let parsedProduction = production.toLowerCase().split(' ').join('');
                
                // Check to see if the production is an add on, and fixing the format if so
                // Also fixing supplydepot (can be read as supplydepotlowered)
    
                if(parsedProduction.includes('techlab')){
                    parsedProduction = 'techlab';
                } 
                
                if (parsedProduction.includes('reactor')) {
                    parsedProduction = 'reactor';
                } 
    
                if(parsedProduction.includes('lowered')){
                    parsedProduction = 'supplydepot';
                }
                
                this.addTableData(parsedProduction, minutes, seconds, supply);
            }
            
        }
    }
    
    // Method needs to be defined like this in order to have access to this.properties
    // This methods gets the data from the user form, then passes it to add to table
    getData = () => {

       //Getting the values of all elements
       let minutes = document.getElementById('minuteSelector').value;
       let seconds = document.getElementById('secondSelector').value;
       let supply = document.getElementById('supplySelector').value;
       let production = document.getElementById('objectSelector').value;

       let parsedProduction = production.split(' ').join('');

       this.addTableData(parsedProduction, minutes, seconds, supply)

    }

    clearTable = () => {

        let tableData = document.getElementById('buildOrderBody').children;
        for (let index = tableData.length - 1 ; index >= 0; index--){
            tableData[index].remove();
        }
    }
}

