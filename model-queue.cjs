let shared;async function queueModel(task){if(!shared)shared=import('p-queue').then(({default:PQueue})=>new PQueue({concurrency:1}));return (await shared).add(task);}module.exports={queueModel};
