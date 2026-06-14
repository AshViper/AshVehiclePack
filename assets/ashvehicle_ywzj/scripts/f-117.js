function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder();
    // builder.setRotation("BLFlap", pitchInput * 12, 0, 0);
    // builder.setRotation("BRFlap", pitchInput * 12, 0, 0);
    builder.setRotation("LeftFlap", 0, 0, rollInput * 20);
    builder.setRotation("RightFlap", 0, 0, rollInput * 20);
    builder.setRotation("LeftTailPlane2", yawInput * 16, 0, 0);
    builder.setRotation("RightTailPlane2", -yawInput * 16, 0, 0);
    return builder;
}
