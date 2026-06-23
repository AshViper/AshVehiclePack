function updateBones(context) {
    const previousPropellerRotation = context.getFloat("propellerRotation", 0)
    const propellerRotation = (previousPropellerRotation + context.getPower() / 5) % 360
    context.setFloat("propellerRotation", propellerRotation)
    const builder = createPoseBuilder()
    builder.setRotation("prop", 0, 0, propellerRotation)
    return builder
}
