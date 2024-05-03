
const easing = {
  linear: t => t,
  easeInQuart: t => t * t * t * t
}

function getValue(start, end, elapsed, duration, easeMethod) {
  if (elapsed > duration) return end
  return start + (end - start) * easing[easeMethod](elapsed / duration)
}
function animate({
  fromValue,
  toValue,
  onUpdate,
  onComplete,
  duration,
  easeMethod = "linear"
}) {
  const startTime = performance.now()
  const tick = () => {
    const elapsed = performance.now() - startTime
    window.requestAnimationFrame(() => {
      return onUpdate(
        getValue(fromValue, toValue, elapsed, duration, easeMethod),
        elapsed <= duration ? tick : onComplete
      )
    })
  }

  tick()
}

export default animate