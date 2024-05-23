# Model Workflow

Create a folder and file structure for your component in src/models:
```text
/
└── src
    └── models
        └──{example} (create folder + files)
        |    ├──{example}.factory.ts
        |    ├──{example}.interface.ts
        |    ├──{example}.mapping.ts
        |    └──{example}.model.ts
        └──super
            └──components.factory.ts (append to file)
            └──components.type.ts (append to file)
            
```
The models contain the data layer, which is used to create components independent of source data

### {example}.mapping.ts
In this file, create an interface that extends "Mapping".
This should represent the data structure specific only to this component.

### {example}.interface.ts
In this file, create an interface that extends the mapping you created in example.mapping.ts and make sure you also extend "Component".
In this file you can also declare any methods that should be present in the model (for instance to calculate derived data, etc.)

### {example}.model.ts
In this file you create the actual implementation for the data model. Make sure the model implements the interface you created in `{example}.interface.ts`
Add a constructor where you add the mapping you created in "example.mapping.ts" as a parameter and assign the data to the corresponding properties of your model.
Implement the logic for the methods you declared in `{example}.interface.ts`, if you have any.

### {example}.factory.ts
In this file, create a class to extend "ComponentFactory", the createComponent method should take the mapping you created in "example.mapping.ts" as a parameter.
Return a new instance of the model you created in "example.model.ts" and pass the parameter you added to the createComponent method on to the constructor of your model.
This factory is used by the ComponentsFactoryCreator in the folder `/src/models/components/super`,
and this make sure that when component models and mappings are setup correctly, the super factory will be able to create everything automatically.

## components.type.ts
In the super folder add the name of your component to ComponentsList enum and add your component model to Components separating the previous value with `|`.

## components.factory.ts
In this file add a case to the switch in createFactory() using you component from the ComponentsList enum and return a new instance of your component factory.

## FYI:
The abstract folder contains the main component which provides a base for all other components. When creating components, there probably isn't a need to edit these files.
However, if there is a need for extra data structure that is present in all the components, this can be altered. Use sparingly and only when appropriate.

### Congrats! Your model is finished! Now check the [README.md](../mapping/README.md) in the mapping folder for the next step :)