﻿using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using Autofac;
using AutoMapper;
using Module = Autofac.Module;

namespace ReduxSagaApp.Core
{
    public class AutofacCoreModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly())
                .Where(x => x.Name.EndsWith("Service"))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AutoMapperCoreProfile());
            });
                
            builder.Register(c => config).AsSelf().SingleInstance();
            builder.Register(c => c.Resolve<MapperConfiguration>().CreateMapper(c.Resolve)).As<IMapper>()
                .InstancePerLifetimeScope();
        }
    }
}
