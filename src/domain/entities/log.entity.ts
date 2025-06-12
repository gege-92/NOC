
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}


export interface LogEntityOptions {
    level: LogSeverityLevel,
    message: string,
    createAt?: Date,
    origin: string
}

export class LogEntity {

    public level: LogSeverityLevel;
    public message: string;
    public createAt: Date;
    public origin: string;

    constructor( options: LogEntityOptions ){

        const { level, message, origin, createAt = new Date() } = options;
        this.message = message;
        this.level = level;
        this.createAt = createAt;
        this.origin = origin;
    }

    
    static fromJSON = (json: string): LogEntity => {

        const { level, message, createdAt, origin } = JSON.parse( json );
        
        const log = new LogEntity({
            level: level,
            message: message,
            createAt: createdAt,
            origin: origin
        });

        return log;
    }

}