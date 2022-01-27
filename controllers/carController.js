import { promises as fs } from "fs";

async function getModels() {
    const data = await fs.readFile("car-list.json");
    const brands = JSON.parse(data);
    brands.sort((a, b) => b.models.length - a.models.length);
    return brands;
}

export async function mostModels(_req, res, _next) {
    try {
        const brands = await getModels();
        const max = brands[0].models.length;
        let maxModels = [];
        brands.map((brand) => {
            if(brand.models.length === max){
                maxModels.push(brand.brand);
            }
        });
     
        res.send(maxModels);
    } catch (error) {
        res.status(400).send(error);
    }
}

export async function fewestModels(_req, res, _next) {
    try {
        let brands = await getModels();
        brands = brands.reverse();
        const max = brands[0].models.length;
        let maxModels = [];
        brands.map((brand) => {
            if(brand.models.length === max){
                maxModels.push(brand.brand);
            }
        });
     
        res.send(maxModels);
    } catch (error) {
        res.status(400).send(error);
    }
}

export async function topRange(req, res, _next) {
    try {
        const num = req.params.x;
        const brands = await getModels();
        let topRangeArr = [];
        for (let i = 0; i < num; i++) {
            topRangeArr.push(`${brands[i].brand} - ${brands[i].models.length}`);
        }
        res.send(topRangeArr);
    } catch (error) {
        res.status(400).send(error);
    }
}

export async function bottomRange(req, res, _next) {
    try {
        const num = req.params.x;
        let brands = await getModels();
        brands = brands.reverse();
        let lowRangeArr = [];
        for (let i = 0; i < num; i++) {
            lowRangeArr.push(`${brands[i].brand} - ${brands[i].models.length}`);
        }
        res.send(lowRangeArr);
    } catch (error) {
        res.status(400).send(error);
    }
}

export async function listModelsFrom(req, res, _next) {
    try {
        let brand = req.params.brand;
        const brands = await getModels();
        brand = brand.toUpperCase();
        let modelsArr = [];
        for (let i = 0; i < brands.length; i++) {
            if (brands[i].brand.toUpperCase() == brand) {
                modelsArr.push(brands[i].models);
            }
        }
        res.send(...modelsArr);
    } catch (error) {
        res.status(400).send(error);
    }
}