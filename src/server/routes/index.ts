import * as express from 'express';

const router: express.Router = express.Router();

router.get('/api/live', [], (req: express.Request, res: express.Response) => {
    return res.send("this endpoint is live");
});

export = router;
