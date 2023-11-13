let instance = null as any;

export default async function getInstance() {
 if (instance === null) {
     const pipeline = require("@xenova/transformers").pipeline;
     const task = 'text-classification';
     const model = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
     instance = await pipeline(task, model);
 }
 return instance;
}