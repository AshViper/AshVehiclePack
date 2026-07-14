function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("RightTailPlane", pitchInput * 12, 0, 0)
    builder.setRotation("LeftTailPlane", pitchInput * 12, 0, 0)
    builder.setRotation("LeftFlap", rollInput * 16, 0, 0)
    builder.setRotation("RightFlap", -rollInput * 16, 0, 0)
    builder.setRotation("LeftVerticalTail", 0, -yawInput * 12, 0)
    builder.setRotation("RightVerticalTail", 0, -yawInput * 12, 0)
    return builder
}
