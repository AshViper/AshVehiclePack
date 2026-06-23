function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("BLFlap", pitchInput * 12, 0, 0)
    builder.setRotation("BRFlap", pitchInput * 12, 0, 0)
    builder.setRotation("LFlap", rollInput * 16, 0, 0)
    builder.setRotation("RFlap", -rollInput * 16, 0, 0)
    builder.setRotation("VBLFlap", 0, -yawInput * 8, 0)
    builder.setRotation("VBRFlap", 0, -yawInput * 8, 0)
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput)
    return builder
}
