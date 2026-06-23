function updateBones(context) {
    const rollInput = context.getRollInput()
    const builder = createPoseBuilder()
    if (rollInput < 0) {
        builder.setRotation("Left4", rollInput * 64, 0, 0)
    } else if (rollInput > 0) {
        builder.setRotation("Right4", -rollInput * 64, 0, 0)
    }
    return builder
}
