using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using Autofac;
using Module = Autofac.Module;

namespace ReduxSagaApp.Sql
{
    public class AutofacSqlModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly())
                .Where(x => x.Name.EndsWith("Repository"))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();
            builder.RegisterType<ReduxSagaAppContext>().InstancePerLifetimeScope();
        }
    }
}
