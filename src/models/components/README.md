# TO DO List:

* Create a component that includes (reuses) other components (nesting) and look for a default way to incorporate this (should this be entirely the responsibility of the model)
  * The model is responsible for the structure and logic needed to construct the front-end
  * The data provider (which is linked through the mappings should be agnostic of the front-end)
  * Both ends, front-end and data provider should be agnostic from each other, link between data and structure should be provided through the mappings