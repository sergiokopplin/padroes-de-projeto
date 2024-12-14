"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
/**
 * Working implementation of the strategy to upload a file to a local directory.
 */
class LocalUpload {
    /**
     * Uploads a file to a local directory.
     * @param filePath The path to the directory to upload to.
     * @param name The name of the file to upload.
     * @param content The content of the file to upload.
     * @returns A promise that resolves to the result of the upload.
     */
    upload(filePath, name, content) {
        return new Promise((resolve, reject) => {
            const result = {
                success: true,
                message: "Uploaded to local storage",
            };
            fs.writeFile(path.join(__dirname, filePath, name), content)
                .then(() => {
                resolve(result);
            })
                .catch((e) => {
                result.success = false;
                result.message = "Error uploading to local storage";
                reject(result);
            });
        });
    }
}
/**
 * This is only a mock implementation of the upload strategy. It is not a real
 * strategy, but it is enough for the example.
 */
class AWSUpload {
    upload(filePath, name, content) {
        return new Promise((resolve, reject) => {
            const result = {
                success: true,
                message: "Uploaded to AWS storage",
            };
            setTimeout(() => {
                resolve(result);
            }, 1000);
        });
    }
}
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    /**
     * The Context delegates some work to the Strategy object instead of
     * implementing multiple versions of the algorithm on its own.
     */
    fileUpload(filePath, name, content) {
        return this.strategy.upload(filePath, name, content);
    }
}
/**
 * I'm creating to different strategies to upload a file to different places.
 */
const localUpload = new LocalUpload();
const awsUpload = new AWSUpload();
const context = new Context(localUpload);
context.fileUpload("/", "Output.txt", "Hello World").then((result) => {
    console.log(result);
});
