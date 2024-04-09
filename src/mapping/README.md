# Mapping Workflow

In case you haven't created your models first, please check the [README](../models/README.md) in the models folder.

```text
/
└── src
    └── mapping
        ├──abstract
        |    └──mapping.type.ts (append)
        ├──config
        |   └──{contentProvider}
        |        ├──components
        |        |   └──{example}.mapping.factory.ts
        |        └──super
        |            └──mappings.factory.ts
        └──{configName}.config.ts
```

1) Create a mapping factory class for your component in `mapping/config/{contentProvider}/components/{example}.mapping.factory.ts`
This class should extend MappingFactory. Add a method createMapping, the parameter should follow the data structure that is given by de contentProvider.
Write your code so that the method returns an instance of the mapping you created for your component in the models folder `{example}.mapping.ts`.

2) Add your mapping factory to MappingList in `mapping/abstract/mapping.type.ts` as `{example} = {exampleMappingFactory}`.

3) In `mapping/config/{contentProvider}/super/mappings.factory.ts` add a case to the switch in the createFactory method
using the MappingList item you added in step 2.
Then return a new instance of the mapping factory you created in step 1.

4) Now you can add the component to the config file in `mapping/{contentProvider}.config.ts` or create one, if it isn't there yet.
Create a new const of type componentsConfig or add your component to an existing one.
You can provide a separate instance of a MappingsFactory (you created a class for in step 3) for each component individual if you want to,
or you can omit it, then it will use the factory set as defaultFactory.
Assign the `name` to the component that is used by the contentProvider, this will link the contentProvider's components to our components.
Set the `component` from the `ComponentsList` from [components.type.ts](../models/super/components.type.ts) in the models folder.
Set the `mapping` from the `MappingList` from [mapping.type.ts](./abstract/mapping.type.ts) in the mapping folder.

5) All done! You can now call getComponentFromConfig from [mapping/abstract/component.instantiate.ts](./abstract/component.instantiate.ts)
using your component from your contentProvider and your componentsConfig you created in step 4.
If you performed all steps carefully, this should return your brand new component. 

### Have fun :D