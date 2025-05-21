"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/getmaps", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`https://api.rustmaps.com/internal/v1/maps/search?customMaps=false&sortBy=&source=all&staging=false&orgId=all&page=${req.body.page}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            searchQuery: {
                size: { min: 3500, max: 3500 },
                biomes: [
                    { type: "Snow", settings: { min: 0, max: 100 } },
                    { type: "Desert", settings: { min: 0, max: 100 } },
                    { type: "Forest", settings: { min: 0, max: 100 } },
                    { type: "Tundra", settings: { min: 0, max: 100 } },
                    { type: "Jungle", settings: { min: 0, max: 100 } },
                ],
                monuments: { min: 0, max: 300 },
                largeMonuments: [
                    {
                        type: "Airfield",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Bandit Town",
                        selectionStatus: "Wanted",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Excavator",
                        selectionStatus: "Wanted",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Ferry Terminal",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Junkyard",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Large Harbor",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Launch Site",
                        selectionStatus: "Wanted",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Military Tunnels",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Nuclear Missile Silo",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Outpost",
                        selectionStatus: "Wanted",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Powerplant",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Radtown",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Satellite Dish",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Sewer Branch",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Small Harbor",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Sphere Tank",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Trainyard",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                    {
                        type: "Water Treatment",
                        selectionStatus: "NoPreference",
                        requiredBiomes: [],
                        blockedBiomes: [],
                    },
                ],
                gasStations: { min: 0, max: 4 },
                supermarkets: { min: 0, max: 4 },
                warehouses: { min: 0, max: 4 },
                lighthouses: { min: 0, max: 4 },
                islands: { min: 0, max: 30 },
                landPercentageOfMap: { min: 0, max: 100 },
                caves: { min: 0, max: 20 },
                swamps: { min: 0, max: 5 },
                mountains: { min: 0, max: 3 },
                icebergs: { min: 0, max: 25 },
                iceLakes: { min: 0, max: 5 },
                rivers: { min: 0, max: 20 },
                waterWells: { min: 0, max: 10 },
                lakes: { min: 0, max: 10 },
                canyons: { min: 0, max: 10 },
                oases: { min: 0, max: 10 },
                buildableRocks: { min: 0, max: 50 },
            },
        }),
    });
    const json = yield data.json();
    res.json(json);
}));
router.post("/randomseed", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const mapsUrl = `http://localhost:${(_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001}/api/getmaps`;
    const data = yield fetch(mapsUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            page: 0,
        }),
    });
    const json = yield data.json();
    const numMaps = json.meta.totalItems;
    const randomPage = Math.floor((Math.random() * numMaps) / 30);
    const maps = yield fetch(mapsUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            page: randomPage,
        }),
    });
    const mapsJson = yield maps.json();
    const randomMapIndex = Math.floor(Math.random() * 30);
    res.status(200).json(mapsJson.data[randomMapIndex].seed);
}));
exports.default = router;
