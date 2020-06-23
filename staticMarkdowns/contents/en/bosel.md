---
author: Fabrice Goret
title: Bosel
date: 2017-08-13
tags:
  - C#
  - VSTO
description: Bank outputs simple extract loader
---
## Repository
[GitHub](https://github.com/fgo-repo/bosel)

## Introduction
This software is a *bank outputs simple extract loader*.

It will provide you an easy and basic way to merge your bank outputs from your different accounts.

It'll allow you to map your inputs with categories.
Once generated, the Excel output will group your data by date and categories (pivot + graph).
An extra sheet will group your expenses and earnings by months.
It'll also allow different versions of mapping by bank.

Csv and Excel files (xlsx) are accepted as inputs.

You'll find input and output samples in the folder samples.

## Config
The config files are located in Bosel\Bosel.App\Config by default:
* **Banks.txt**: settings of the banks
* **Categories.txt**: how to map the rows of your files with a category. Use the VSTO to create/modify this file easier
* **Paths.txt** (optional): list of the paths (sources, output and config).

They're mapped with the class located in Bosel.Model.Common.Source (JSON transformation).
Check the comments in the class to know how to use them.

## External libraries
You'll need to restore the NuGet packages at the first run for:
* [Json.NET, popular high-performance JSON framework for .NET](http://www.newtonsoft.com/json)
* [EPPlus, a library to manage Excel spreadsheets, using OOXML](http://epplus.codeplex.com/)

For Visual Studio 2015 (if you want to use the Excel addin):
* [Microsoft Office Developer Tools for Visual Studio 2015](https://blogs.msdn.microsoft.com/visualstudio/2015/11/23/latest-microsoft-office-developer-tools-for-visual-studio-2015/) ([direct link](https://aka.ms/GetLatestOfficeDevTools))

<img data-src="./../images/bosel.jpg" class="lazyload" alt="Global view of the pivot output and VSTO addin">