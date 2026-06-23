function updateBones(context) {
    const previousPropellerRotation = context.getFloat("propellerRotation", 0)
    const propellerRotation = (previousPropellerRotation + context.getPower() / 5) % 360
    context.setFloat("propellerRotation", propellerRotation)

    const builder = createPoseBuilder()
    builder.setRotation("VINT", 0, -propellerRotation, 0)
    builder.setRotation("VINT2", -propellerRotation * 5, 0, 0)
    builder.setRotation("m2", -context.getPartXRot("mg"), -context.getPartYRot("mg"), 0)
    builder.setRotation("m2_2", -context.getPartXRot("mg_2"), -context.getPartYRot("mg_2"), 0)
    builder.setRotation("rushag3", context.getPitchInput() * 10, 0, -context.getRollInput() * 10)
    builder.setRotation("rushag2", context.getPitchInput() * 10, 0, -context.getRollInput() * 10)
    return builder
}
