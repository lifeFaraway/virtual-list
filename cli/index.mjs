#! /usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";
import inquirer from "inquirer";

import { Command, program } from "commander";

program
  .command("createPKG")
  .description("创建package.json文件")
  .action(() => {
    const pathUrl = path.resolve(process.cwd(), "package.json");
    if (fs.existsSync(pathUrl)) {
      console.log(chalk.red("package.json文件已存在"));
    } else {
      inquirer
        .prompt([
          {
            name: "name",
            type: "input",
            message: "项目名称",
          },
          {
            name: "version",
            type: "input",
            message: "版本号",
            default: "1.0.0", // 默认值
          },
          {
            name: "description",
            type: "input",
            message: "项目的描述",
          },
        ]) // 录入问题
        .then((answers) => {
          console.log(answers);
          fs.appendFileSync(pathUrl, JSON.stringify(answers), {
            encoding: "utf-8",
          });
        });
    }
  });

program.parse(process.argv);
