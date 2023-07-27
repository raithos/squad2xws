import { basicCardData, canonicalize } from './lib';
import { serialtoxws } from "../../models/YASBCardData";
import { Pilot, Vendor, XWSSquadron } from "../../models/XWSSquadron";
import { serializedToShips } from "./permalink"

export async function serializedToXWS(faction: string, serialized: string, squadName: string, obstacles: string, originalPath: string): Promise<XWSSquadron> {

    const xwsSquadron = JSON.parse(serialtoxws(serialized));

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

