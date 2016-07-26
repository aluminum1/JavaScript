//https://en.wikipedia.org/wiki/Sigmoid_function
function sigmoid(t){
    return 1 / (1 + Math.exp(-t));
}

var testResults = [];
for (var i = -5.00; i < 5.00; i+= 0.1){
	testResults.push (sigmoid(i));
}

console.log(testResults); 


/*
Results of Simoid Function:

[0.0066928509242848554, 0.007391541344281971, 0.00816257115315989, 0.009013298652847815, 0.009951801866904308, 0.010986942630593162, 0.012128434984274213, 0.013386917827664744, 0.014774031693273017, 0.01630249937144089, 0.017986209962091496, 0.01984030573407744, 0.021881270936130404, 0.024127021417669123, 0.026596993576865773, 0.02931223075135623, 0.03229546469845042, 0.03557118927263607, 0.03916572279676425, 0.04310725494108601, 0.04742587317756666, 0.05215356307841761, 0.05732417589886861, 0.06297335605699635, 0.06913842034334666, 0.0758581800212434, 0.08317269649392221, 0.09112296101485597, 0.09975048911968498, 0.10909682119561274, 0.11920292202211738, 0.13010847436299766, 0.1418510649004876, 0.1544652650835345, 0.16798161486607532, 0.18242552380635615, 0.19781611144141806, 0.21416501695744122, 0.23147521650098218, 0.24973989440488223, 0.26894142136999494, 0.28905049737499583, 0.3100255188723874, 0.3318122278318337, 0.3543436937742043, 0.3775406687981452, 0.4013123398875477, 0.42555748318834075, 0.45016600268752177, 0.4750208125210598, 0.4999999999999998, 0.5249791874789397, 0.5498339973124777, 0.5744425168116587, 0.5986876601124518, 0.6224593312018543, 0.6456563062257953, 0.6681877721681658, 0.6899744811276123, 0.7109495026250037, 0.7310585786300047, 0.7502601055951174, 0.7685247834990174, 0.7858349830425585, 0.8021838885585817, 0.8175744761936437, 0.8320183851339245, 0.8455347349164652, 0.8581489350995121, 0.8698915256370021, 0.8807970779778823, 0.8909031788043871, 0.9002495108803148, 0.9088770389851438, 0.9168273035060777, 0.9241418199787566, 0.9308615796566533, 0.9370266439430035, 0.9426758241011313, 0.9478464369215823, 0.9525741268224334, 0.9568927450589139, 0.9608342772032357, 0.9644288107273639, 0.9677045353015495, 0.9706877692486438, 0.973403006423134, 0.9758729785823308, 0.9781187290638694, 0.9801596942659225, 0.9820137900379085, 0.9836975006285591, 0.9852259683067269, 0.9866130821723351, 0.9878715650157257, 0.9890130573694068, 0.9900481981330957, 0.990986701347152, 0.9918374288468401, 0.9926084586557181, 0.993307149075715]

*/