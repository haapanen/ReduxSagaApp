﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using ReduxSagaApp.Sql;

namespace ReduxSagaApp.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var ctx = new ReduxSagaAppContext();
            if (!ctx.Products.Any())
            {
                new DbSeed().Seed(ctx);
            }

            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureServices(s => s.AddAutofac())
                .UseStartup<Startup>()
                .Build();
    }
}