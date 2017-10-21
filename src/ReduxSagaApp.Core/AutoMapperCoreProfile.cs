using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using AutoMapper;
using ReduxSagaApp.Core.Models;

namespace ReduxSagaApp.Core
{
    public class AutoMapperCoreProfile : Profile
    {
        private const string CreationModelNamePostfix = "CreationModel";

        public AutoMapperCoreProfile()
        {
            var creationModels = Assembly.GetExecutingAssembly().GetTypes()
                .Where(x => x.Name.EndsWith(CreationModelNamePostfix)).ToList();
            var entityNamesWithCreationModels = creationModels.Select(x => x.Name.Substring(0, x.Name.Length - CreationModelNamePostfix.Length));
            var entities = Assembly.GetExecutingAssembly().GetTypes()
                .Where(x => entityNamesWithCreationModels.Contains(x.Name));
            foreach (var entity in entities)
            {
                var creationModel = creationModels
                    .FirstOrDefault(x => x.Name.Substring(0, x.Name.Length - CreationModelNamePostfix.Length) == entity.Name);
                CreateMap(creationModel, entity);
            }
        }
    }
}
