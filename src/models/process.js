class Process {
    constructor(processId, startTime, cpuTime, cpuUsage, memoryUsage, stdOut, stdErr, endTime, exitCode) {
        this.processId = processId;
        this.startTime = startTime;
        this.cpuTime = cpuTime;
        this.cpuTime = cpuUsage;
        this.memoryUsage = memoryUsage;
        this.stdOut = stdOut;
        this.stdErr = stdErr;
        this.endTime = endTime;
        this.exitCode = exitCode;
    }

    toString() {
        return [
            this.processId,
            this.startTime,
            this.cpuTime,
            this.cpuUsage,
            this.memoryUsage,
            this.endTime,
            this.exitCode
        ].join(",");
    }
};
