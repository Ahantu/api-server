import app from "./app";
import { logger } from "./util/logger";

const server = app.listen(app.get("port"), () => {
    logger.info(`server running on port ${app.get('port')}`)
})