import { basicCardData, canonicalize } from './lib';
import { serialtoxws } from "../../models/YASBCardData";
import { Pilot, Vendor, XWSSquadron } from "../../models/XWSSquadron";
import { serializedToShips } from "./permalink"

export async function serializedToXWS(faction: string, serialized: string, squadName: string, obstacles: string, originalPath: string): Promise<XWSSquadron> {

    const vendor = <Vendor>{
        builder: 'squad2xws',
        builder_url: 'http://squad2xws.objectivecat.com/',
        link: "https://yasb.app/?" + originalPath
    }

    const vendorMap: Map<string, Vendor> = new Map()
    vendorMap.set("squad2xws", vendor)
    
    const xwsSquadron = JSON.parse(serialtoxws(serialized));

    xwsSquadron.vendor = vendormap;
    xwsSquadron.version = '2.7.0';
    
    return xwsSquadron;
}

function toXWSFaction(fac: string): string {
    switch (fac) {
        case 'Rebel Alliance': return 'rebelalliance'
        case 'Galactic Empire': return 'galacticempire'
        case 'Scum and Villainy': return 'scumandvillainy'
        case 'First Order': return 'firstorder'
        case 'Resistance': return 'resistance'
        case 'Galactic Republic': return 'galacticrepublic'
        case 'Separatist Alliance': return 'separatistalliance'
        default: return 'rebelalliance'
    }
}

